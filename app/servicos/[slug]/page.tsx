import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ServicePage } from "@/components/service-page";
import { Footer } from "@/components/footer";
import { FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { SERVICES, getService } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "GeoArq" };

  return {
    title: `${service.title} — GeoArq`,
    description: service.description,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="relative">
      <ServiceJsonLd service={service} />
      <FaqJsonLd faq={service.faq} />
      <Navbar />
      <ServicePage slug={service.slug} />
      <Footer />
    </main>
  );
}
