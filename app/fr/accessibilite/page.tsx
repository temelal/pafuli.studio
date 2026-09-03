import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

const description = "L’approche d’accessibilité de Pafuli Studio pour son site public, ses images et ses futurs médias.";

export const metadata: Metadata = {
  title: "Accessibilité",
  description,
  alternates: { canonical: "/fr/accessibilite", languages: { en: "/accessibility", "fr-CA": "/fr/accessibilite" } },
  openGraph: { type: "website", locale: "fr_CA", alternateLocale: "en_CA", url: "/fr/accessibilite", siteName: "Pafuli Studio", title: "Accessibilité · Pafuli Studio", description, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Accessibilité · Pafuli Studio", description, images: ["/og.png"] },
};

export default function AccessibilityPageFr() {
  return <PolicyPage locale="fr" type="accessibility" />;
}
