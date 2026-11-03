This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Localization

The portfolio uses `next-intl` with `/de`, `/en` and `/ja` URLs. Requests without a
language prefix are redirected based on the saved language preference or browser
language; English is the fallback. The globe button opens a language menu with
Deutsch, English and Japanese. Switching languages keeps the current page,
query string and section anchor, and saves the preference in `NEXT_LOCALE`.

Edit `messages/de.json`, `messages/en.json` and `messages/ja.json` to update
translated text. Keep the same keys in all files. Navigation labels can be translated, but section
IDs, project URLs and `/api/contact` must remain language-independent. The API
returns stable error codes that the contact form translates.

Run `npm run test:i18n` to check matching keys, message formatting and translated
API errors without contacting Google or sending email. The tests also check the
privacy notice's service coverage and section structure in all three languages.

Page language, descriptions, canonical URLs and alternate-language links are
generated for each locale.

## Privacy Review Before Publishing

The privacy notice in DE/EN/JA describes Vercel hosting, Resend email delivery,
the Purelymail mailbox, opt-in reCAPTCHA, the language and consent cookies, and
data subject rights. It is a technical draft, not legal approval. The imprint
is separate and has not been legally reviewed as part of this update.

Confirm the actual provider contracts and international transfer safeguards
before publishing. In particular, Vercel's published processor DPA applies to
Pro and Enterprise plans; do not assume it covers a Hobby account. Verify the
applicable Resend and Google Cloud terms, contracting entities and settings.
Purelymail documents US hosting, but an applicable DPA and Chapter V transfer
mechanism were not established in this review. Do not treat another provider's
Data Privacy Framework certification as covering Purelymail. Resolve this with
Purelymail or use a suitably contracted mailbox provider, then make the transfer
section specific to the arrangements actually in place.

There is no fixed deletion schedule for contact messages yet. Adopt and document
a purpose-based review/deletion process covering the mailbox, Resend history,
logs and backups, and verify provider-specific retention settings. Updating the
notice does not implement automatic deletion. Check the deployed configuration
for analytics or other integrations not present in the source code, and obtain
legal review of the notices and translations before treating them as final.

`userCookieConsent` stores acceptance or refusal for 365 days; `NEXT_LOCALE`
stores the language preference for 365 days. The global consent provider is
available on home and legal pages. The privacy settings buttons reopen the
banner; declining after acceptance saves refusal and reloads the document to
stop loaded reCAPTCHA code. It cannot undo prior transfers or remove Google
cookies on other domains. Direct email remains an alternative to the form.

## Contact Form CAPTCHA

The contact form uses Google reCAPTCHA v2. Add both keys to `.env.local`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
RESEND_API_KEY=your-resend-api-key
```

The site key and secret are different values. Keep the secret server-side and
never prefix it with `NEXT_PUBLIC_`. The server verifies each CAPTCHA response
before sending the contact message through Resend. Messages are sent from
`info@sonhaivu.com` to `info@sonhaivu.com`, with the visitor's email as Reply-To.
Verify `sonhaivu.com` in Resend and configure the required DNS records before
sending. The recipient address must have a working mailbox or forwarding setup;
Resend provides outgoing email, not an inbox. Set the same environment variables
on the deployment host and restart the local server after changing them.

The homepage content lives in `components/Home.jsx`; language routes and the root
layout live in `app/[locale]`. The page auto-updates as you edit the files.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
