import type { Metadata } from "next";
import { StudioSite } from "@/components/studio-site";

export const metadata: Metadata = {
  title: { absolute: "Pafuli Studio — Des jeux avec un point de vue" },
  description: "Jeux originaux, mécaniques précises et collaborations choisies par Pafuli Studio.",
  alternates: { canonical: "/fr", languages: { en: "/", "fr-CA": "/fr" } },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    url: "/fr",
    siteName: "Pafuli Studio",
    title: "Pafuli Studio — Des jeux avec un point de vue",
    description: "Jeux originaux, mécaniques précises et collaborations choisies depuis Montréal.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pafuli Studio — Des jeux avec un point de vue" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pafuli Studio — Des jeux avec un point de vue",
    description: "Jeux originaux, mécaniques précises et collaborations choisies depuis Montréal.",
    images: ["/og.png"],
  },
};

export default function Accueil() { return <StudioSite locale="fr" />; }
