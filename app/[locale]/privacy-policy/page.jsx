import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const translations = await getTranslations({ locale, namespace: "Privacy" });
    return pageMetadata(locale, "/privacy-policy", translations("text001"));
}

export { default } from "./Content";
