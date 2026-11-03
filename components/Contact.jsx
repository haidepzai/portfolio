"use client";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useLocale, useTranslations } from 'next-intl';

const Contact = ({ recaptchaConsent }) => {
  const translations = useTranslations('Contact');
  const locale = useLocale();
  const recaptchaRef = useRef(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSucceeded, setSubmissionSucceeded] = useState(false);

  useEffect(() => {
    setCaptchaToken(null);
  }, [locale]);

  // state for form inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // state to control icon visibility and button text
  const [showIcon, setShowIcon] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Show a brief confirmation after a successful submission.
  useEffect(() => {
    if (!submissionSucceeded) return;

    setShowIcon(true);
    const timer = setTimeout(() => setShowIcon(false), 3000);
    return () => clearTimeout(timer);
  }, [submissionSucceeded]);

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!recaptchaSiteKey || !recaptchaConsent || !captchaToken) {
      setSubmitError('captchaRequired');
      return;
    }

    setIsSubmitting(true);
    setSubmissionSucceeded(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: captchaToken }),
      });
      const result = await response.json();

      if (!response.ok) {
        const code = result.code;
        setSubmitError(typeof code === 'string' && translations.has(`errors.${code}`) ? code : 'sendFailed');
        return;
      }

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmissionSucceeded(true);
    } catch {
      setSubmitError('sendFailed');
    } finally {
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text={translations('title')}
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            {/* form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
              {/* firstname & lastname fields */}
              <div className="flex gap-8">
                {/* firstname */}
                <div className="flex-1">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    {translations('firstname')} <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    className="input"
                    placeholder={translations('firstname')}
                    required
                  />
                </div>
                {/* lastname */}
                <div className="flex-1">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    {translations('lastname')} <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    className="input"
                    placeholder={translations('lastname')}
                    required
                  />
                </div>
              </div>
              {/* email fields */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  {translations('email')} <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input"
                  placeholder="youremail@email.com"
                  required
                />
              </div>
              {/* phone fields */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  {translations('phone')}
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="input"
                  placeholder="+49 1234567890"
                />
              </div>
              {/* message fields */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  {translations('message')} <span className="text-accent">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className="textarea"
                  placeholder={translations('placeholder')}
                  rows="5"
                  required
                />
              </div>
              <div className="space-y-2">
                {recaptchaSiteKey && recaptchaConsent ? (
                  <ReCAPTCHA
                    key={locale}
                    hl={locale}
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError("");
                      setSubmitError("");
                    }}
                    onExpired={() => setCaptchaToken(null)}
                    onErrored={() => {
                      setCaptchaToken(null);
                      setCaptchaError('captchaLoad');
                    }}
                  />
                ) : !recaptchaSiteKey ? (
                  <p className="text-sm text-red-600" role="alert">
                    {translations('errors.captchaNotConfigured')}
                  </p>
                ) : (
                  <p className="text-sm text-secondary" role="status">
                    {translations('consent')}
                  </p>
                )}
                {captchaError && (
                  <p className="text-sm text-red-600" role="alert">
                    {translations(captchaError)}
                  </p>
                )}
                {submitError && (
                  <p className="text-sm text-red-600" role="alert">
                    {translations(`errors.${submitError}`)}
                  </p>
                )}
                {submissionSucceeded && (
                  <p className="text-sm text-green-700" role="status">
                    {translations('success')}
                  </p>
                )}
              </div>
              {/* submit button */}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !recaptchaSiteKey ||
                  !recaptchaConsent ||
                  !captchaToken
                }
                className="btn btn-accent flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{translations('sending')}</span>
                ) : (
                  <>
                    {/* show icon with opacity transition */}
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    {/* button text */}
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"
                        }`}
                    >
                      {translations('send')}
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png"
              className="object-cover"
              fill
              quality={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
