import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { dictionaries } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = ["", "/work", "/services", "/about", "/contact"];
  const caseStudies = dictionaries.en.work.items.map((p) => `/work/${p.slug}`);

  return [...routes, ...caseStudies].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.6 : 0.8,
  }));
}
