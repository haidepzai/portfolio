import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {createTranslator} from 'next-intl';
import {POST} from '../app/api/contact/route.js';

const locales = ['de', 'en', 'ja'];
const dictionaries = Object.fromEntries(await Promise.all(locales.map(async locale => [
  locale,
  JSON.parse(await readFile(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8'))
])));

function messageKeys(messages, prefix = '') {
  return Object.entries(messages).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      assert.ok(value.trim(), `Empty translation: ${name}`);
      return [name];
    }
    assert.ok(value && typeof value === 'object' && !Array.isArray(value), `Invalid message: ${name}`);
    return messageKeys(value, name);
  }).sort();
}

test('All languages contain the same non-empty translation keys', () => {
  for (const locale of locales) {
    assert.deepEqual(messageKeys(dictionaries[locale]), messageKeys(dictionaries.en), locale);
  }
});

for (const locale of locales) {
  test(`${locale}: every message can be formatted by next-intl`, () => {
    const translate = createTranslator({
      locale,
      messages: dictionaries[locale],
      onError(error) { throw error; }
    });
    for (const key of messageKeys(dictionaries[locale])) {
      assert.equal(typeof translate(key, {title: 'Example'}), 'string', key);
    }
  });
}

const validBody = {firstname: 'Test', lastname: 'Visitor', email: 'test@example.com', message: 'Test message', recaptchaToken: 'test-token'};
const cases = [
  {code: 'invalidRequest', status: 400, body: null},
  {code: 'captchaRequired', status: 400, body: {}},
  {code: 'captchaNotConfigured', status: 503, body: validBody, secret: ''},
  {code: 'requiredFields', status: 400, body: {...validBody, firstname: ''}},
  {code: 'invalidEmail', status: 400, body: {...validBody, email: 'invalid'}},
  {code: 'serviceNotConfigured', status: 503, body: validBody, serviceKey: ''},
  {code: 'captchaFailed', status: 403, body: validBody, verification: false},
  {code: 'sendFailed', status: 502, body: validBody, sendStatus: 502},
  {code: 'serviceUnavailable', status: 502, body: validBody, networkError: true}
];

for (const scenario of cases) {
  test(`contact API: ${scenario.code} is translated in all locales`, async context => {
    const previousSecret = process.env.RECAPTCHA_SECRET_KEY;
    const previousServiceKey = process.env.RESEND_API_KEY;
    process.env.RECAPTCHA_SECRET_KEY = scenario.secret ?? 'test-secret';
    process.env.RESEND_API_KEY = scenario.serviceKey ?? 'test-key';
    context.after(() => {
      if (previousSecret === undefined) delete process.env.RECAPTCHA_SECRET_KEY;
      else process.env.RECAPTCHA_SECRET_KEY = previousSecret;
      if (previousServiceKey === undefined) delete process.env.RESEND_API_KEY;
      else process.env.RESEND_API_KEY = previousServiceKey;
    });
    context.mock.method(globalThis, 'fetch', async url => {
      if (scenario.networkError) throw new Error('Simulated network failure');
      if (url === 'https://www.google.com/recaptcha/api/siteverify') {
        return Response.json({success: scenario.verification ?? true});
      }
      assert.equal(url, 'https://api.resend.com/emails');
      return Response.json({}, {status: scenario.sendStatus ?? 200});
    });
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(scenario.body)
    });
    const response = await POST(request);
    const result = await response.json();
    assert.equal(response.status, scenario.status);
    assert.equal(result.code, scenario.code);
    for (const locale of locales) {
      assert.ok(dictionaries[locale].Contact.errors[result.code]);
    }
  });
}