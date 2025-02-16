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

export const metadata = {
  title: "Son Hai Vu",
  description: "Portfolio of Son Hai Vu",
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
