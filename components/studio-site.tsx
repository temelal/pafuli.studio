import Link from "next/link";
import { GameArtwork } from "./game-artwork";
import { JsonLd } from "./json-ld";
import { copy, gameHref, games, type Locale } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function StudioHeader({ locale, alternateHref }: { locale: Locale; alternateHref?: string }) {
  const t = copy[locale];
  const home = locale === "fr" ? "/fr" : "/";
  return (
    <header className="studio-header">
      <Link className="studio-wordmark" href={home} aria-label={locale === "fr" ? "Accueil de Pafuli Studio" : "Pafuli Studio home"}>
        <span className="wordmark-pafuli">PAFULI</span>
        <span className="wordmark-studio">STUDIO</span>
      </Link>
      <nav aria-label={t.navLabel}>
        <Link href={`${home}#games`}>{t.games}</Link>
        <Link href={`${home}#collaborate`}>{t.collaborate}</Link>
        <Link href={`${home}#about`}>{t.about}</Link>
        <Link className="language-link" href={alternateHref ?? t.langHref} hrefLang={locale === "fr" ? "en" : "fr-CA"}>{t.langName}</Link>
        <Link className="ink-button header-cta" href={`${home}#contact`}>{t.navContact}</Link>
      </nav>
    </header>
  );
}

export function StudioFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="studio-footer">
      <div className="footer-top">
        <div>
          <Link className="studio-wordmark footer-wordmark" href={locale === "fr" ? "/fr" : "/"}>
            <span className="wordmark-pafuli">PAFULI</span>
            <span className="wordmark-studio">STUDIO</span>
          </Link>
          <p>{t.legal}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.parentUrl}>{t.parentLink} ↗</a>
          <Link href={locale === "fr" ? "/fr/confidentialite" : "/privacy"}>{t.privacy}</Link>
          <Link href={locale === "fr" ? "/fr/accessibilite" : "/accessibility"}>{t.accessibility}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}</span>
        <span>{t.updated}</span>
      </div>
    </footer>
  );
}

export function StudioSite({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const gameList = games[locale];
  const pageUrl = locale === "fr" ? `${siteConfig.url}/fr` : siteConfig.url;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      brand: { "@id": `${siteConfig.url}/#brand` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: ["en", "fr-CA"],
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      "@id": `${siteConfig.url}/#brand`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: copy.en.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      name: `${t.titleBefore} ${t.titleEmphasis}`,
      url: pageUrl,
      description: t.intro,
      inLanguage: locale === "fr" ? "fr-CA" : "en",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#brand` },
    },
  ];

  return (
    <div className="studio-site" lang={locale === "fr" ? "fr-CA" : "en"}>
      <JsonLd data={schema} />
      <a className="skip-link" href="#content">{t.skip}</a>

      <div className="sun-stage-header">
        <StudioHeader locale={locale} />
      </div>
      <main id="content">
        <div className="sun-stage">
          <section className="studio-hero" id="top" aria-labelledby="hero-title">
            <div className="hero-dots dots-one" aria-hidden="true" />
            <div className="hero-dots dots-two" aria-hidden="true" />
            <span className="hero-ring" aria-hidden="true" />
            <div className="studio-hero-copy">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1 id="hero-title">{t.titleBefore} <em>{t.titleEmphasis}</em></h1>
              <p>{t.intro}</p>
              <a className="ink-button" href="#games">{t.games} <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-art-wrap">
              <span className="art-caption">01 · Lock On</span>
              <GameArtwork image={gameList[0].image} alt={gameList[0].imageAlt} eager className="hero-art" label={t.conceptArt} />
              <span className="art-status">{gameList[0].status}</span>
            </div>
          </section>
          <nav className="project-rail" aria-label={t.index}>
            <span className="rail-title">{t.index}</span>
            {gameList.map((game) => (
              <Link href={gameHref(locale, game.slug)} key={game.slug}>
                <span>{game.number}</span>
                <strong>{game.name}</strong>
                <small>{game.status}</small>
              </Link>
            ))}
          </nav>
        </div>

      <section className="games-section" id="games" aria-labelledby="games-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">{t.gamesEyebrow}</p>
            <h2 id="games-title">{t.gamesTitle}</h2>
          </div>
          <p>{t.gamesIntro}</p>
        </div>

        <div className="game-list">
          {gameList.map((game, index) => (
            <article className={`game-feature game-feature-${index + 1}`} key={game.slug}>
              <GameArtwork image={game.image} alt={game.imageAlt} label={t.conceptArt} />
              <div className="game-feature-copy">
                <div className="game-meta">
                  <span>{game.number}</span>
                  <span>{game.genre}</span>
                  <span>{game.status}</span>
                </div>
                <div>
                  <p className="working-title">{game.qualifier ?? t.originalLabel}</p>
                  <h3>{game.name}</h3>
                  <p>{game.summary}</p>
                </div>
                <div className="game-feature-actions">
                  <Link href={gameHref(locale, game.slug)}>{t.gameLink} <span aria-hidden="true">↗</span></Link>
                  <span>{t.platformsPending}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collaboration-section" id="collaborate" aria-labelledby="work-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow">{t.workEyebrow}</p>
            <h2 id="work-title">{t.workTitle}</h2>
          </div>
          <p>{t.workIntro}</p>
        </div>
        <div className="service-grid">
          {t.services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-section" aria-labelledby="systems-title">
        <div className="systems-shape" aria-hidden="true" />
        <div className="systems-copy">
          <p className="eyebrow">{t.systemsEyebrow}</p>
          <h2 id="systems-title">{t.systemsTitle}</h2>
          <p>{t.systemsBody}</p>
        </div>
        <ul>
          {t.systemList.map((system, index) => (
            <li key={system}><span>0{index + 1}</span>{system}</li>
          ))}
        </ul>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-title-block">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2 id="about-title">{t.aboutTitle}</h2>
        </div>
        <div className="about-copy">
          <p>{t.aboutBody}</p>
          <div className="about-principles">
            <article><span>01</span><h3>{t.principleOne}</h3><p>{t.principleOneBody}</p></article>
            <article><span>02</span><h3>{t.principleTwo}</h3><p>{t.principleTwoBody}</p></article>
          </div>
        </div>
      </section>

      <section className="studio-contact" id="contact" aria-labelledby="contact-title">
        <span className="contact-orbit" aria-hidden="true" />
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h2 id="contact-title">{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <a className="ink-button" href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a>
      </section>
      </main>

      <StudioFooter locale={locale} />
    </div>
  );
}
