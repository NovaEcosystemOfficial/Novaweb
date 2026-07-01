import type { MetadataRoute } from "next";
import { PRODUCT_SLUGS } from "@/lib/ecosystem";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nova.example.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/labs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/downloads`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...PRODUCT_SLUGS.map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/nova-mobile-alpha`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/delete-data`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
