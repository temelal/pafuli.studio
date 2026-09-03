import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

const description = "Pafuli Studio’s accessibility approach for its public website, images, and future media.";

export const metadata: Metadata = {
  title: "Accessibility",
  description,
  alternates: { canonical: "/accessibility", languages: { en: "/accessibility", "fr-CA": "/fr/accessibilite" } },
  openGraph: { type: "website", locale: "en_CA", alternateLocale: "fr_CA", url: "/accessibility", siteName: "Pafuli Studio", title: "Accessibility · Pafuli Studio", description, images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Accessibility · Pafuli Studio", description, images: ["/og.png"] },
};

export default function AccessibilityPage() {
  return <PolicyPage locale="en" type="accessibility" />;
}
