import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — GeoArq",
  description:
    "Como a GeoArq coleta, usa, armazena e protege seus dados pessoais, em conformidade com a LGPD.",
};

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
