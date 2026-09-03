import type { ReactNode } from "react";
import { DocumentLanguage } from "@/components/document-language";

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocumentLanguage language="fr-CA" />
      {children}
    </>
  );
}
