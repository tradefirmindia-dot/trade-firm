import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span>404 / TRADE FIRM</span><h1>This research page could not be found.</h1><p>The link may have changed. Return to the Trade Firm research platform.</p><Link className="primary-btn" href="/"><ArrowLeft size={17} /> Return home</Link>
    </main>
  );
}
