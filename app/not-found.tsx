import Link from "next/link";
import { StudioFooter, StudioHeader } from "@/components/studio-site";

export default function NotFound() {
  return (
    <div className="studio-site policy-page-frame">
      <div className="game-page-head"><StudioHeader locale="en" /></div>
      <main className="policy-page" id="content">
        <p className="eyebrow">404 · Off course</p>
        <h1>This path is still uncharted.</h1>
        <p className="policy-date">The page may have moved, or it may not exist yet.</p>
        <Link className="ink-button" href="/">Return to Pafuli Studio</Link>
      </main>
      <StudioFooter locale="en" />
    </div>
  );
}
