import Link from "next/link";
import { StudioFooter, StudioHeader } from "./studio-site";
import { copy, type Locale } from "@/lib/content";

export function PolicyPage({ locale, type }: { locale: Locale; type: "privacy" | "accessibility" }) {
  const t = copy[locale];
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? t.privacy : t.accessibility;
  const alternateHref = isPrivacy
    ? locale === "fr" ? "/privacy" : "/fr/confidentialite"
    : locale === "fr" ? "/accessibility" : "/fr/accessibilite";
  const sections = isPrivacy
    ? locale === "fr"
      ? [
          ["Site public", "Ce site ne comporte actuellement aucun compte, téléversement, outil de suivi publicitaire ni formulaire de collecte de renseignements personnels."],
          ["Plateformes externes", "Les futurs liens vers les boutiques, vidéos et plateformes de jeux mèneront à des services tiers régis par leurs propres modalités."],
          ["Avant toute collecte", "Cet avis sera mis à jour avant l’activation d’une liste d’attente, d’une infolettre ou d’un formulaire qui conserve des renseignements personnels."],
        ]
      : [
          ["Public website", "This site currently has no accounts, uploads, advertising trackers, or form that collects personal information."],
          ["External platforms", "Future links to stores, videos, and game platforms will lead to third-party services governed by their own terms."],
          ["Before collection", "This notice will be updated before a waitlist, newsletter, or form that retains personal information is enabled."],
        ]
    : locale === "fr"
      ? [
          ["Notre objectif", "Pafuli Studio vise une expérience conforme aux principes WCAG 2.2 AA, utilisable au clavier, structurée sémantiquement et compatible avec la réduction des mouvements."],
          ["Images et médias", "Les images de jeu informatives comprennent des textes de remplacement. Toute future bande-annonce devra comporter des sous-titres et une solution de rechange textuelle."],
          ["Amélioration", "Les commentaires sur l’accessibilité sont les bienvenus à t@pafuli.studio. Nous proposerons une solution de rechange raisonnable lorsque possible."],
        ]
      : [
          ["Our aim", "Pafuli Studio aims for a WCAG 2.2 AA experience that works by keyboard, uses semantic structure, and respects reduced-motion preferences."],
          ["Images and media", "Informative game images include alternative text. Any future trailer will require captions and a text alternative."],
          ["Improvement", "Accessibility feedback is welcome at t@pafuli.studio. We will offer a reasonable alternative where possible."],
        ];

  return (
    <div className="studio-site policy-page-frame" lang={locale === "fr" ? "fr-CA" : "en"}>
      <a className="skip-link" href="#content">{t.skip}</a>
      <div className="game-page-head"><StudioHeader locale={locale} alternateHref={alternateHref} /></div>
      <main id="content" className="policy-page">
        <Link className="back-link" href={locale === "fr" ? "/fr" : "/"}>← {t.back}</Link>
        <p className="eyebrow">Pafuli Studio · {title}</p>
        <h1>{title}</h1>
        <p className="policy-date">{locale === "fr" ? "Révisé le 3 septembre 2026" : "Reviewed September 3, 2026"}</p>
        <div className="policy-sections">
          {sections.map(([heading, body]) => (
            <section key={heading}><h2>{heading}</h2><p>{body}</p></section>
          ))}
        </div>
      </main>
      <StudioFooter locale={locale} />
    </div>
  );
}
