import type { Metadata } from "next";
import { GameDetail } from "@/components/game-detail";

export const metadata: Metadata = {
  title: "Lock On — Jeu de vol sans fin",
  description: "Lock On est un jeu de vol sans fin où il faut lire l’espace à venir et tenir sa trajectoire.",
  alternates: { canonical: "/fr/jeux/lock-on", languages: { en: "/games/lock-on", "fr-CA": "/fr/jeux/lock-on" } },
  openGraph: { type: "website", locale: "fr_CA", alternateLocale: "en_CA", url: "/fr/jeux/lock-on", siteName: "Pafuli Studio", title: "Lock On — Pafuli Studio", description: "Un jeu de vol sans fin où il faut lire l’espace à venir.", images: [{ url: "/images/lock-on-concept.png", width: 1672, height: 941, alt: "Illustration conceptuelle de Lock On — pas une image de jeu" }] },
  twitter: { card: "summary_large_image", title: "Lock On — Pafuli Studio", description: "Un jeu de vol sans fin où il faut lire l’espace à venir.", images: ["/images/lock-on-concept.png"] },
};

export default function LockOnPageFr() { return <GameDetail locale="fr" slug="lock-on" />; }
