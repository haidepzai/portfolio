import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Imprint = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto py-16 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center mt-16">
                    Impressum
                </h1>
                <p className="mb-4">Angaben gemäß § 5 DDG</p>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold mt-8">Verantwortlich</h2>
                <p className="mb-4">
                    Son Hai Vu
                    <br />
                    Stuttgarter Str. 134
                    <br />
                    73312 Geislingen
                    <br />
                    Deutschland
                </p>

                <h2 className="text-xl font-semibold mt-8">Kontakt</h2>
                <p className="mb-4">
                    Telefon: +49 152 37349594
                    <br />
                    E-Mail:{" "}
                    <a
                        href="mailto:haidepzai.solutions@gmail.com"
                        className="text-accent underline"
                    >
                        haidepzai.solutions@gmail.com
                    </a>
                </p>

                <h2 className="text-xl font-semibold mt-8">Tätigkeit</h2>
                <p className="mb-4">
                    Softwareentwicklung sowie Betrieb eines Online-Portfolios und einer
                    Web-Anwendung.
                </p>

                <h2 className="text-xl font-semibold mt-8">Umsatzsteuer</h2>
                <p className="mb-4">
                    Es wird keine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
                    angegeben.
                </p>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold mt-8">Haftung für Inhalte</h2>
                <p className="mb-4">
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
                    Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>

                <h2 className="text-xl font-semibold mt-8">Haftung für Links</h2>
                <p className="mb-4">
                    Diese Website kann Links zu externen Websites Dritter enthalten, auf
                    deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte wird
                    daher keine Gewähr übernommen. Für die Inhalte der verlinkten Seiten
                    ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>

                <h2 className="text-xl font-semibold mt-8">Urheberrecht</h2>
                <p className="mb-4">
                    Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
                    dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechts bedarf der vorherigen schriftlichen
                    Zustimmung des jeweiligen Rechteinhabers.
                </p>
            </main>
            <Footer />
        </>
    );
};

export default Imprint;
