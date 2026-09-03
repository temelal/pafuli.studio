import type { Metadata } from "next";
import { GameDetail } from "@/components/game-detail";

export const metadata: Metadata = {
  title: "Signal Garden — Contemplative idle game",
  description: "Tend a small centre, improve its systems, and watch a quiet network take on a life of its own.",
  alternates: { canonical: "/games/signal-garden", languages: { en: "/games/signal-garden", "fr-CA": "/fr/jeux/signal-garden" } },
  openGraph: { type: "website", locale: "en_CA", alternateLocale: "fr_CA", url: "/games/signal-garden", siteName: "Pafuli Studio", title: "Signal Garden — Pafuli Studio", description: "A contemplative idle game about tending a small centre and growing a living network.", images: [{ url: "/images/signal-garden-concept.png", width: 1672, height: 941, alt: "Signal Garden concept artwork — not gameplay" }] },
  twitter: { card: "summary_large_image", title: "Signal Garden — Pafuli Studio", description: "A contemplative idle game about growing a living network.", images: ["/images/signal-garden-concept.png"] },
};

export default function SignalGardenPage() { return <GameDetail locale="en" slug="signal-garden" />; }
