import Link from "next/link";
import { Instagram, Mail, Send } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="premium-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" />
          <div>
            <strong>TRADE FIRM</strong>
            <span>TRADE • ANALYZE • GROW</span>
            <p>Professional Indian stock-market research and defined-risk intelligence for serious market participants.</p>
          </div>
        </div>

        <div className="footer-column">
          <b>Research</b>
          <Link href="/research-services">Research Services</Link>
          <Link href="/#tenx">10X THINK</Link>
          <Link href="/blogs">Research Blogs</Link>
          <Link href="/about-us">About Trade Firm</Link>
        </div>
        <div className="footer-column">
          <b>Tools & Coverage</b>
          <Link href="/tools/risk-planner">Risk Planner</Link>
          <span>NIFTY 50</span>
          <span>BANK NIFTY</span>
          <span>FINNIFTY & SENSEX</span>
        </div>
        <div className="footer-column">
          <b>Contact</b>
          <a href="mailto:tradefirmindia@gmail.com"><Mail size={16} /> Email</a>
          <a href="https://t.me/TRADE_FIRM" target="_blank" rel="noopener noreferrer"><Send size={16} /> Telegram</a>
          <a href="https://instagram.com/tradefirmindia" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a>
          <Link href="/#lead">Request a callback</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p><b>Market risk:</b> Investments in securities market are subject to market risks. Read all related documents carefully before investing.</p>
        <span>© {new Date().getFullYear()} Trade Firm. All rights reserved.</span>
      </div>
    </footer>
  );
}
