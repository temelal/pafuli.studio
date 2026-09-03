import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

const description = "La façon dont le site public de Pafuli Studio traite les renseignements personnels et les liens externes.";

export const metadata: Metadata = {
  title: "Confidentialité",
  description,
  alternates: { canonical: "/fr/confidentialite", languages: { en: "/privacy", "fr-CA": "/fr/confidentialite" } },
  openGraph: { type: "website", locale: "fr_CA", alternateLocale: "en_CA", url: "/fr/confidentialite", siteName: "Pafuli Studio", title: "Confidentialité · Pafuli Studio", description, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Confidentialité · Pafuli Studio", description, images: ["/og.png"] },
};

export default function PrivacyPageFr() {
  return <PolicyPage locale="fr" type="privacy" />;
}
