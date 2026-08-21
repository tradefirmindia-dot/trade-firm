"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const servicePaths = ["/research-services", "/forex-broker-india", "/stock-market-advisory-india", "/stock-market-research-india", "/nifty-bank-nifty-advisory", "/options-derivatives-research", "/equity-research", "/ipo-research"];
  const servicesActive = servicePaths.some((path) => active(path));

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function closeMenu() {
      setMenuOpen(false);
    }

    function onKeyDown(event) {
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("resize", closeMenu);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function active(path) {
    return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Trade Firm home">
        <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" width="46" height="46" />
        <div><strong>TRADE FIRM</strong><span>ADVISORY • RESEARCH</span></div>
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav id="site-navigation" className={menuOpen ? "open" : ""} aria-label="Primary navigation">
        <details className={`nav-dropdown services-dropdown ${servicesActive ? "active" : ""}`}>
          <summary>Advisory &amp; Research <ChevronDown size={15} /></summary>
          <div className="nav-dropdown-panel services-dropdown-panel">
            <Link href="/research-services"><small>OVERVIEW</small><b>All Services</b></Link>
            <Link href="/forex-broker-india"><small>GLOBAL MARKETS</small><b>Forex &amp; MT5 Access</b></Link>
            <Link href="/stock-market-advisory-india"><small>INDIA</small><b>Stock Market Advisory</b></Link>
            <Link href="/stock-market-research-india"><small>RESEARCH</small><b>Market Research</b></Link>
            <Link href="/nifty-bank-nifty-advisory"><small>INDICES</small><b>NIFTY &amp; BANK NIFTY</b></Link>
            <Link href="/options-derivatives-research"><small>DERIVATIVES</small><b>Options &amp; F&amp;O</b></Link>
            <Link href="/equity-research"><small>EQUITIES</small><b>Equity Research</b></Link>
            <Link href="/ipo-research"><small>PRIMARY MARKET</small><b>IPO Research</b></Link>
          </div>
        </details>
        <details className={`nav-dropdown ${active("/tools") ? "active" : ""}`}>
          <summary>Tools <ChevronDown size={15} /></summary>
          <div className="nav-dropdown-panel">
            <Link href="/tools"><small>RESEARCH TOOLS</small><b>All Tools</b></Link>
            <Link href="/tools/risk-planner"><small>POSITION SIZING</small><b>Risk Planner</b></Link>
            <Link href="/tools/risk-reward-calculator"><small>DECISION MATH</small><b>Risk–Reward Calculator</b></Link>
            <Link href="/tools/drawdown-recovery-calculator"><small>CAPITAL RISK</small><b>Drawdown Calculator</b></Link>
          </div>
        </details>
        <Link href="/#tenx">10X THINK</Link>
        <Link className={active("/blogs") || active("/research-library") ? "active" : ""} href="/blogs">Blogs</Link>
        <Link className={active("/about-us") ? "active" : ""} href="/about-us">About Us</Link>
        <Link href="/contact" className="nav-cta">Speak to our desk <ArrowRight size={15} /></Link>
      </nav>
    </header>
  );
}
