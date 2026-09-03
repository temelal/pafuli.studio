import type { Metadata } from "next";
import { GameDetail } from "@/components/game-detail";

export const metadata: Metadata = {
  title: "Signal Garden — Jeu idle contemplatif",
  description: "Prenez soin d’un petit centre, améliorez ses systèmes et regardez un réseau discret prendre vie.",
  alternates: { canonical: "/fr/jeux/signal-garden", languages: { en: "/games/signal-garden", "fr-CA": "/fr/jeux/signal-garden" } },
  openGraph: { type: "website", locale: "fr_CA", alternateLocale: "en_CA", url: "/fr/jeux/signal-garden", siteName: "Pafuli Studio", title: "Signal Garden — Pafuli Studio", description: "Un jeu de progression contemplatif consacré à la croissance d’un réseau vivant.", images: [{ url: "/images/signal-garden-concept.png", width: 1672, height: 941, alt: "Illustration conceptuelle de Signal Garden — pas une image de jeu" }] },
  twitter: { card: "summary_large_image", title: "Signal Garden — Pafuli Studio", description: "Un jeu de progression contemplatif consacré à la croissance d’un réseau vivant.", images: ["/images/signal-garden-concept.png"] },
};

export default function SignalGardenPageFr() { return <GameDetail locale="fr" slug="signal-garden" />; }
