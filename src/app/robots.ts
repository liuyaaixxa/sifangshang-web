import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/v1", "/v2", "/v3"],
    },
    sitemap: "https://sifangshang.vercel.app/sitemap.xml",
  };
}
