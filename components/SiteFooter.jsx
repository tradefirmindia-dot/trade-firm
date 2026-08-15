import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { siteIdentity } from "../lib/site-identity";

export default function SiteFooter() {
  return (
    <footer className="premium-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" width="52" height="52" />
          <div>
            <strong>TRADE FIRM</strong>
            <span>TRADE • ANALYZE • GROW</span>
            <p>A professional Indian stock market advisory and research firm delivering process-led market intelligence with defined-risk thinking.</p>
          </div>
        </div>

        <div className="footer-column">
          <b>Advisory &amp; Research</b>
          <Link href="/stock-market-advisory-india">Stock Market Advisory India</Link>
          <Link href="/stock-market-research-india">Stock Market Research India</Link>
          <Link href="/nifty-bank-nifty-advisory">NIFTY &amp; BANK NIFTY</Link>
          <Link href="/options-derivatives-research">Options &amp; Derivatives</Link>
          <Link href="/equity-research">Equity Research</Link>
          <Link href="/ipo-research">IPO Research</Link>
        </div>
        <div className="footer-column">
          <b>Research Resources</b>
          <Link href="/research-services">All Services</Link>
          <Link href="/research-library">Research Library</Link>
          <Link href="/tools/risk-planner">Risk Planner</Link>
          <Link href="/tools/risk-reward-calculator">Risk–Reward Calculator</Link>
          <Link href="/tools/drawdown-recovery-calculator">Drawdown Calculator</Link>
          <Link href="/sample-research-report">Sample Research Format</Link>
          <Link href="/research-methodology">Research Methodology</Link>
          <Link href="/authors/trade-firm-research-desk">Research Desk</Link>
          <Link href="/blogs">Market Insights</Link>
          <Link href="/about-us">About Trade Firm</Link>
        </div>
        <div className="footer-column">
          <b>Contact</b>
          <a href={`tel:${siteIdentity.phoneHref}`} data-analytics-event="phone_click"><Phone size={16} /> {siteIdentity.phoneDisplay}</a>
          <a href={`mailto:${siteIdentity.email}`} data-analytics-event="email_click"><Mail size={16} /> {siteIdentity.email}</a>
          <span><MapPin size={16} /> Thane, Maharashtra</span>
          <span><MapPin size={16} /> Navi Mumbai, Maharashtra</span>
          <a href={siteIdentity.socials.telegram} target="_blank" rel="noopener noreferrer" data-analytics-event="telegram_click"><Send size={16} /> Telegram</a>
          <a href={siteIdentity.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a>
          <Link href="/contact">Contact &amp; callback</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div><p><b>Market risk:</b> Investments in securities market are subject to market risks. Read all related documents carefully before investing. Research and advisory views do not assure or guarantee returns.</p><nav aria-label="Legal and trust links"><Link href="/trust-centre">Trust Centre</Link><Link href="/editorial-policy">Editorial Policy</Link><Link href="/risk-disclosure">Risk Disclosure</Link><Link href="/grievance-redressal">Grievance Redressal</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-use">Terms</Link></nav></div>
        <span>© {new Date().getFullYear()} Trade Firm. All rights reserved.</span>
      </div>
    </footer>
  );
}
