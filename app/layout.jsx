import { Inter, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

const siteUrl = "https://sonhaivu.com";
const description =
  "Portfolio of Son Hai Vu — web developer building modern, performant websites and applications.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Son Hai Vu",
    template: "%s | Son Hai Vu",
  },
  description,
  openGraph: {
    title: "Son Hai Vu",
    description,
    url: siteUrl,
    siteName: "Son Hai Vu",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Son Hai Vu — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Hai Vu",
    description,
    images: ["/assets/banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
        {/* Cookie Consent Banner */}
        {/*}
        <Script
          strategy="afterInteractive"
          src="//cdn.cookie-script.com/s/879774cdca492b8b59fc04b779b73473.js"
          type="text/javascript"
          charset="UTF-8"
        />
        */}
      </body>
    </html>
  );
}
