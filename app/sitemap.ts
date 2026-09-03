import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const updated = new Date("2026-09-03T00:00:00-04:00");
const origin = "https://pafuli.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: origin,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: origin, "fr-CA": `${origin}/fr` } },
    },
    {
      url: `${origin}/fr`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: origin, "fr-CA": `${origin}/fr` } },
    },
    {
      url: `${origin}/games/lock-on`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${origin}/images/lock-on-concept.png`],
      alternates: {
        languages: {
          en: `${origin}/games/lock-on`,
          "fr-CA": `${origin}/fr/jeux/lock-on`,
        },
      },
    },
    {
      url: `${origin}/fr/jeux/lock-on`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${origin}/images/lock-on-concept.png`],
      alternates: {
        languages: {
          en: `${origin}/games/lock-on`,
          "fr-CA": `${origin}/fr/jeux/lock-on`,
        },
      },
    },
    {
      url: `${origin}/games/signal-garden`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${origin}/images/signal-garden-concept.png`],
      alternates: {
        languages: {
          en: `${origin}/games/signal-garden`,
          "fr-CA": `${origin}/fr/jeux/signal-garden`,
        },
      },
    },
    {
      url: `${origin}/fr/jeux/signal-garden`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${origin}/images/signal-garden-concept.png`],
      alternates: {
        languages: {
          en: `${origin}/games/signal-garden`,
          "fr-CA": `${origin}/fr/jeux/signal-garden`,
        },
      },
    },
    {
      url: `${origin}/privacy`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.25,
      alternates: {
        languages: { en: `${origin}/privacy`, "fr-CA": `${origin}/fr/confidentialite` },
      },
    },
    {
      url: `${origin}/fr/confidentialite`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: {
        languages: { en: `${origin}/privacy`, "fr-CA": `${origin}/fr/confidentialite` },
      },
    },
    {
      url: `${origin}/accessibility`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.25,
      alternates: {
        languages: { en: `${origin}/accessibility`, "fr-CA": `${origin}/fr/accessibilite` },
      },
    },
    {
      url: `${origin}/fr/accessibilite`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.2,
      alternates: {
        languages: { en: `${origin}/accessibility`, "fr-CA": `${origin}/fr/accessibilite` },
      },
    },
  ];
}
