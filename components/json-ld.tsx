import { SITE } from "@/lib/site";
import type { Service } from "@/lib/services";

const SITE_URL = "https://geoarq.com.br";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#organization`,
    name: SITE.fullName,
    alternateName: SITE.brand,
    url: SITE_URL,
    logo: `${SITE_URL}/geoarq.webp`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Escritório de arquitetura, urbanismo, paisagismo e regularização imobiliária. Atuação técnica integrada — da viabilidade à conformidade, da regularização ao projeto.",
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: {
      "@type": "Place",
      name: "São Paulo e região metropolitana",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [SITE.instagramUrl],
    knowsAbout: [
      "Arquitetura",
      "Urbanismo",
      "Paisagismo",
      "Regularização imobiliária",
      "Aprovação de projetos",
      "Alvarás de construção",
      "Usucapião",
      "Averbação de matrícula",
      "EVTL",
      "EIV",
      "Vistorias técnicas",
      "Due diligence imobiliária",
      "As Built",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/servicos/${service.slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.eyebrow,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#organization`,
      name: SITE.fullName,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "São Paulo e região metropolitana",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  faq,
}: {
  faq: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE.brand,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
