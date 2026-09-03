import Link from "next/link";
import { GameArtwork } from "./game-artwork";
import { JsonLd } from "./json-ld";
import { StudioFooter, StudioHeader } from "./studio-site";
import { copy, gameHref, games, type Locale } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function GameDetail({ locale, slug }: { locale: Locale; slug: "lock-on" | "signal-garden" }) {
  const t = copy[locale];
  const game = games[locale].find((item) => item.slug === slug)!;
  const canonicalGame = games.en.find((item) => item.slug === slug)!;
  const url = `${siteConfig.url}${gameHref(locale, slug)}`;
  const canonicalUrl = `${siteConfig.url}${gameHref("en", slug)}`;
  const alternateHref = gameHref(locale === "fr" ? "en" : "fr", slug);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "@id": `${canonicalUrl}#game`,
      name: canonicalGame.name,
      url: canonicalUrl,
      description: canonicalGame.summary,
      genre: canonicalGame.genre,
      image: `${siteConfig.url}/images/${game.image}.png`,
      author: { "@id": `${siteConfig.url}/#brand` },
      publisher: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: game.name,
      url,
      description: game.summary,
      inLanguage: locale === "fr" ? "fr-CA" : "en",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": `${canonicalUrl}#game` },
    },
  ];

  return (
    <div className={`studio-site game-page game-page-${slug}`} lang={locale === "fr" ? "fr-CA" : "en"}>
      <JsonLd data={schema} />
      <a className="skip-link" href="#content">{t.skip}</a>
      <div className="game-page-head">
        <StudioHeader locale={locale} alternateHref={alternateHref} />
      </div>
      <main id="content">
        <section className="game-hero" aria-labelledby="game-title">
          <div className="game-hero-heading">
            <Link className="back-link" href={locale === "fr" ? "/fr#games" : "/#games"}>← {t.back}</Link>
            <div className="game-hero-meta">
              <span>{game.number}</span>
              <span>{game.genre}</span>
              <span>{game.status}</span>
            </div>
            <p className="working-title">{game.qualifier ?? t.originalLabel}</p>
            <h1 id="game-title">{game.name}</h1>
            <p>{game.summary}</p>
          </div>
          <GameArtwork image={game.image} alt={game.imageAlt} eager className="game-page-art" label={t.conceptArt} />
        </section>

        <section className="game-story" aria-labelledby="direction-title">
          <div>
            <p className="eyebrow">{locale === "fr" ? "Direction actuelle" : "Current direction"}</p>
            <h2 id="direction-title">
              {slug === "lock-on"
                ? locale === "fr" ? "Lire l’espace. Tenir la trajectoire." : "Read the space. Hold the line."
                : locale === "fr" ? "Faire grandir un signal avec patience." : "Grow a signal with patience."}
            </h2>
          </div>
          <p>{game.longDescription}</p>
        </section>

        <section className="direction-grid" aria-label={locale === "fr" ? "Éléments de conception" : "Design direction"}>
          {game.direction.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="release-panel" aria-labelledby="release-title">
          <div>
            <p className="eyebrow">{locale === "fr" ? "Sortie" : "Release"}</p>
            <h2 id="release-title">{t.platformsPending}</h2>
          </div>
          <p>
            {locale === "fr"
              ? "Les liens vers Steam, l’App Store, Google Play, YouTube ou toute autre destination seront regroupés ici lorsqu’ils auront été confirmés."
              : "Steam, App Store, Google Play, YouTube, and any other confirmed destination will be collected here when they are ready."}
          </p>
        </section>
      </main>
      <StudioFooter locale={locale} />
    </div>
  );
}
