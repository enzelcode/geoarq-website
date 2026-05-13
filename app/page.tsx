import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { ServicesPinned } from "@/components/services-pinned";
import { Process } from "@/components/process";
import { Commitments } from "@/components/commitments";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <main className="relative">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Navbar />
      <Hero />
      <Manifesto />
      <ServicesPinned />
      <Process />
      <Commitments />
      <CtaFinal />
      <Footer />
    </main>
  );
}
