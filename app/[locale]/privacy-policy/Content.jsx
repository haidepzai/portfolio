import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = async () => {
  const translations = await getTranslations("Privacy");
  return (
    <>
      <Header />
      <main className="container mx-auto pt-48 xl:pt-16 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center mt-16">
          {translations("text001")}
        </h1>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text002")}
        </h2>
        <p className="mb-4">{translations("text003")}</p>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text004")}
        </h2>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text005")}</li>
          <li>{translations("text006")}</li>
          <li>{translations("text007")}</li>
          <li>{translations("text008")}</li>
          <li>{translations("text009")}</li>
          <li>{translations("text010")}</li>
          <li>{translations("text011")}</li>
          <li>{translations("text012")}</li>
          <li>{translations("text013")}</li>
          <li>{translations("text014")}</li>
          <li>{translations("text015")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text016")}
        </h2>
        <p>
          {translations("text017")}
          <br />
          {translations("text018")}
          <br />
          {translations("text019")}{" "}
          <a href="mailto:info@sonhaivu.com" className="text-accent underline">
            {translations("text020")}
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text021")}
        </h2>
        <p className="mb-4">{translations("text022")}</p>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text023")}
        </h2>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text024")}</li>
          <li>{translations("text025")}</li>
          <li>{translations("text026")}</li>
          <li>{translations("text027")}</li>
          <li>{translations("text028")}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">
          {translations("text029")}
        </h3>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text030")}</li>
          <li>{translations("text031")}</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text032")}
        </h3>
        <ul className="list-disc list-inside">
          <li>{translations("text033")}</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text034")}
        </h3>
        <p className="mb-4">{translations("text035")}</p>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text036")}</li>
          <li>{translations("text037")}</li>
          <li>{translations("text038")}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">
          {translations("text039")}
        </h3>
        <p className="mb-4">{translations("text040")}</p>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text041")}
        </h2>
        <p className="mb-4">{translations("text042")}</p>
        <h2 className="text-2xl font-semibold mt-8">
          {translations("text043")}
        </h2>
        <p className="mb-4">{translations("text044")}</p>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text045")}
        </h3>
        <p className="mb-4">{translations("text046")}</p>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text047")}
        </h3>
        <p className="mb-4">{translations("text048")}</p>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text049")}</li>
          <li>{translations("text050")}</li>
          <li>{translations("text051")}</li>
          <li>{translations("text052")}</li>
          <li>{translations("text053")}</li>
          <li>{translations("text054")}</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text055")}
        </h3>
        <p className="mb-4">{translations("text056")}</p>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text057")}
        </h3>
        <p className="mb-4">{translations("text058")}</p>
        <h3>{translations("text059")}</h3>
        <p className="mb-4">{translations("text060")}</p>
        <h3 className="text-xl font-semibold mt-6">
          {translations("text061")}
        </h3>
        <p className="mb-4">{translations("text062")}</p>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text063")}</li>
          <li>{translations("text064")}</li>
          <li>{translations("text065")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text066")}
        </h2>
        <p className="mb-4">{translations("text067")}</p>

        <ul className="list-disc list-inside pl-6">
          <li>{translations("text068")}</li>
          <li>{translations("text069")}</li>
          <li>{translations("text070")}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">
          {translations("text071")}
        </h3>
        <p className="mb-4">{translations("text072")}</p>

        <ul className="list-disc list-inside pl-6">
          <li>{translations("text073")}</li>
          <li>{translations("text074")}</li>
          <li>{translations("text075")}</li>
          <li>{translations("text076")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          {translations("text077")}
        </h2>
        <p className="mb-4">{translations("text078")}</p>
        <ul className="list-disc list-inside pl-6">
          <li>{translations("text079")}</li>
          <li>{translations("text080")}</li>
          <li>{translations("text081")}</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
