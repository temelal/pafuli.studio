import type { Metadata } from "next";
import { StudioSite } from "@/components/studio-site";

export const metadata: Metadata = {
  title: { absolute: "Pafuli Studio — Games with a point of view" },
  description: "Original games, connected player systems, and thoughtful collaborations by Pafuli Studio.",
  alternates: { canonical: "/", languages: { en: "/", "fr-CA": "/fr" } },
};

export default function Home() {
  return <StudioSite locale="en" />;
}
