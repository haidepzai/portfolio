import { routing } from "./routing";
import { getTranslations } from "next-intl/server";

const openGraphLocales = { de: "de_DE", en: "en_US", ja: "ja_JP" };

export async function pageMetadata(locale, pathname = "", title) {
  const translations = await getTranslations({ locale, namespace: "Metadata" });
  const description = translations(
    pathname === "/imprint"
      ? "imprintDescription"
      : pathname === "/privacy-policy"
        ? "privacyDescription"
        : "description",
  );
  const localizedPath = `/${locale}${pathname}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((language) => [
            language,
            `/${language}${pathname}`,
          ]),
        ),
        "x-default": `/${routing.defaultLocale}${pathname}`,
      },
    },
    openGraph: {
      title: title || "Son Hai Vu",
      description,
      url: localizedPath,
      siteName: "Son Hai Vu",
      locale: openGraphLocales[locale],
      alternateLocale: routing.locales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
      type: "website",
      images: [
        {
          url: "/assets/banner.jpg",
          width: 1200,
          height: 630,
          alt: "Son Hai Vu - Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Son Hai Vu",
      description,
      images: ["/assets/banner.jpg"],
    },
  };
}
