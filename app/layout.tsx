import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const SITE_URL = "https://geoarq.com.br";
const SITE_NAME = "GeoArq";
const TITLE =
  "GeoArq — Arquitetura, Urbanismo e Regularização Imobiliária";
const DESCRIPTION =
  "Escritório de arquitetura, urbanismo, paisagismo e regularização imobiliária. Da viabilidade à conformidade, da regularização ao projeto — sob o mesmo olhar técnico.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s",
  },
  description: DESCRIPTION,
  keywords: [
    "GeoArq",
    "arquitetura",
    "urbanismo",
    "paisagismo",
    "regularização imobiliária",
    "averbação",
    "usucapião",
    "alvará",
    "CLCB",
    "EVTL",
    "EIV",
    "vistoria técnica",
    "due diligence",
    "São Paulo",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "architecture",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-hidden">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
