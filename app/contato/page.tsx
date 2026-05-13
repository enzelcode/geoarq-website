import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContactPage } from "@/components/contact-page";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contato — GeoArq",
  description:
    "Fale com a GeoArq: arquitetura, urbanismo, paisagismo e regularização imobiliária. Atendimento direto com os arquitetos titulares.",
};

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}
