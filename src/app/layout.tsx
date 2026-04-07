import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automatisierungs-Rechner | EL Büroservice",
  description:
    "Berechnen Sie, wie viel Zeit und Geld Ihr Unternehmen durch Automatisierung sparen kann. Kostenlose Analyse von EL Büroservice.",
  openGraph: {
    title: "Automatisierungs-Rechner | EL Büroservice",
    description:
      "Berechnen Sie Ihr Einsparpotenzial durch intelligente Automatisierung.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Automatisierungs-Rechner",
              url: "https://xn--el-broservice-zob.com",
              description:
                "Interaktiver ROI-Rechner: Berechnen Sie, wie viel Zeit und Geld Ihr Unternehmen durch Automatisierung sparen kann.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              author: {
                "@type": "Organization",
                name: "EL Büroservice",
                url: "https://el-bueroservice.com",
                sameAs: [
                  "https://el-bueroservice.com",
                  "https://www.linkedin.com/in/eric-noel-lieberwirth-306b8022a",
                  "https://github.com/Ericson-TM",
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
