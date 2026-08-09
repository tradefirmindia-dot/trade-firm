"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" />
        <div><strong>TRADE FIRM</strong><span>TRADE • ANALYZE • GROW</span></div>
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
        <Link className={active("/research-services") ? "active" : ""} href="/research-services">Research Services</Link>
        <details className={`nav-dropdown ${active("/tools") ? "active" : ""}`}>
          <summary>Tools <ChevronDown size={15} /></summary>
          <div className="nav-dropdown-panel">
            <Link href="/tools"><small>RESEARCH TOOLS</small><b>All Tools</b></Link>
            <Link href="/tools/risk-planner"><small>POSITION SIZING</small><b>Risk Planner</b></Link>
          </div>
        </details>
        <Link href="/#tenx">10X THINK</Link>
        <Link className={active("/blogs") ? "active" : ""} href="/blogs">Blogs</Link>
        <Link className={active("/about-us") ? "active" : ""} href="/about-us">About Us</Link>
        <Link href="/#lead" className="nav-cta">Request a call <ArrowRight size={15} /></Link>
      </nav>
    </header>
  );
}
