import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sifangshang.vercel.app";
  const products = ["garments", "footwear", "masks", "chairs", "flooring"];
  const solutions = ["electronics", "semiconductor", "biopharma", "laboratory", "aerospace"];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/v1`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/v2`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/v3`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...products.map((p) => ({
      url: `${base}/products/${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...solutions.map((s) => ({
      url: `${base}/solutions/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
