import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Imprint = async () => {
    const translations = await getTranslations("Imprint");
    return (
        <>
            <Header />
            <main className="container mx-auto pt-48 xl:pt-16 pb-16 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center mt-16">
                    {translations("text001")}
                </h1>
                <p className="mb-4">{translations("text002")}</p>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text003")}
                </h2>
                <p className="mb-4">
                    {translations("text004")}
                    <br />
                    {translations("text005")}
                    <br />
                    {translations("text006")}
                    <br />
                    {translations("text007")}
                </p>

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text008")}
                </h2>
                <p className="mb-4">
                    {translations("text009")}
                    <br />
                    {translations("text010")}{" "}
                    <a href="mailto:info@sonhaivu.com" className="text-accent underline">
                        {translations("text011")}
                    </a>
                </p>

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text012")}
                </h2>
                <p className="mb-4">{translations("text013")}</p>

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text014")}
                </h2>
                <p className="mb-4">{translations("text015")}</p>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text016")}
                </h2>
                <p className="mb-4">{translations("text017")}</p>

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text018")}
                </h2>
                <p className="mb-4">{translations("text019")}</p>

                <h2 className="text-xl font-semibold mt-8">
                    {translations("text020")}
                </h2>
                <p className="mb-4">{translations("text021")}</p>
            </main>
            <Footer />
        </>
    );
};

export default Imprint;
