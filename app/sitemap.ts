import type { MetadataRoute } from "next";
import { content, langs, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...content.fr.projects.list.map(({ slug }) => `/projects/${slug}`)];
  return paths.flatMap((path) =>
    langs.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(langs.map((other) => [other, `${siteUrl}/${other}${path}`])),
      },
    })),
  );
}
