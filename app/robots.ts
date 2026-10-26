import type { MetadataRoute } from "next";

const siteUrl = "https://sankettank.me";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/v1/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: "sankettank.me",
  };
}
