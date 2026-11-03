import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return pageMetadata(locale);
}

export { default } from "@/components/Home";
