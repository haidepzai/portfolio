import { Inter, Bebas_Neue } from "next/font/google";
import "@fontsource-variable/noto-sans-jp";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/i18n/metadata";
import CookieConsentProvider from "@/components/CookieConsentProvider";
import "../globals.css";

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-bebas",
});

export async function generateMetadata({ params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    return {
        metadataBase: new URL("https://sonhaivu.com"),
        title: { default: "Son Hai Vu", template: "%s | Son Hai Vu" },
        ...(await pageMetadata(locale)),
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    return (
        <html lang={locale}>
            <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
                <NextIntlClientProvider>
                    <CookieConsentProvider>{children}</CookieConsentProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
