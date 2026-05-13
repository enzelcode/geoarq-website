import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://geoarq.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/servicos/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
