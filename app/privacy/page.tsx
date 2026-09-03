import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

const description = "How the Pafuli Studio public website handles personal information and links to external platforms.";

export const metadata: Metadata = {
  title: "Privacy",
  description,
  alternates: { canonical: "/privacy", languages: { en: "/privacy", "fr-CA": "/fr/confidentialite" } },
  openGraph: { type: "website", locale: "en_CA", alternateLocale: "fr_CA", url: "/privacy", siteName: "Pafuli Studio", title: "Privacy · Pafuli Studio", description, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Privacy · Pafuli Studio", description, images: ["/og.png"] },
};

export default function PrivacyPage() {
  return <PolicyPage locale="en" type="privacy" />;
}
