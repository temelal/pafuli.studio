import type { Metadata } from "next";
import { GameDetail } from "@/components/game-detail";

export const metadata: Metadata = {
  title: "Lock On — Endless-flight game",
  description: "Lock On is an endless-flight game about reading the space ahead and holding your line for one more run.",
  alternates: { canonical: "/games/lock-on", languages: { en: "/games/lock-on", "fr-CA": "/fr/jeux/lock-on" } },
  openGraph: { type: "website", locale: "en_CA", alternateLocale: "fr_CA", url: "/games/lock-on", siteName: "Pafuli Studio", title: "Lock On — Pafuli Studio", description: "An endless-flight game about reading the space ahead.", images: [{ url: "/images/lock-on-concept.png", width: 1672, height: 941, alt: "Lock On concept artwork — not gameplay" }] },
  twitter: { card: "summary_large_image", title: "Lock On — Pafuli Studio", description: "An endless-flight game about reading the space ahead.", images: ["/images/lock-on-concept.png"] },
};

export default function LockOnPage() { return <GameDetail locale="en" slug="lock-on" />; }
