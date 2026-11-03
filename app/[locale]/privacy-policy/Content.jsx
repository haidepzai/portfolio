import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CookieSettingsButton } from "@/components/CookieConsentProvider";

const providerLinks = {
  vercel: "https://vercel.com/legal/privacy-policy",
  resend: "https://resend.com/legal/dpa",
  purelymail: "https://purelymail.com/privacy",
  google: "https://docs.cloud.google.com/recaptcha/docs/faq#data-processing",
  googleDpa: "https://cloud.google.com/terms/data-processing-addendum",
  googleCookies: "https://policies.google.com/technologies/cookies",
  complaints: "https://www.baden-wuerttemberg.datenschutz.de/beschwerde/",
};

const PrivacyPolicy = async () => {
  const translations = await getTranslations("Privacy");
  const sections = Object.entries(translations.raw("sections"));
  return (
    <>
      <Header />
      <main className="container mx-auto pt-48 xl:pt-16 pb-16 px-4">
        <article className="max-w-3xl mx-auto leading-relaxed">
          <h1 className="text-3xl font-bold mb-6 text-center mt-16">
            {translations("text001")}
          </h1>
          <p className="mb-4 text-secondary">{translations("updated")}</p>
          <p className="mb-8">{translations("intro")}</p>

          <section aria-labelledby="privacy-controller">
            <h2 id="privacy-controller" className="text-2xl font-semibold mb-3">
              {translations("controller.title")}
            </h2>
            <address className="not-italic">
              {translations("controller.name")}<br />
              {translations("controller.address")}<br />
              {translations("controller.email")}: {" "}
              <a href="mailto:info@sonhaivu.com" className="text-primary underline decoration-accent hover:decoration-primary">
                info@sonhaivu.com
              </a>
            </address>
          </section>

          <nav aria-label={translations("contents")} className="my-8">
            <h2 className="text-2xl font-semibold mb-3">{translations("contents")}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {sections.map(([key, section]) => (
                <li key={key}>
                  <a href={`#privacy-${key}`} className="underline underline-offset-4">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {sections.map(([key, section]) => (
            <section key={key} aria-labelledby={`privacy-${key}`} className="mt-8">
              <h2 id={`privacy-${key}`} className="text-2xl font-semibold mb-3 scroll-mt-40">
                {section.title}
              </h2>
              <p className="mb-4">{section.body}</p>
              <p className="mb-4">{section.details}</p>
              {key === "withdrawal" && (
                <CookieSettingsButton className="text-primary underline decoration-accent underline-offset-4 hover:decoration-primary" />
              )}
            </section>
          ))}

          <section aria-labelledby="privacy-links" className="mt-8">
            <h2 id="privacy-links" className="text-2xl font-semibold mb-3">
              {translations("links.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {Object.entries(providerLinks).map(([key, url]) => (
                <li key={key}>
                  <a href={url} className="text-primary underline decoration-accent underline-offset-4 hover:decoration-primary">
                    {translations(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
