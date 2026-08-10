import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageIntro({ eyebrow, title, accent, text, primaryLabel = "Speak with our desk", primaryHref = "/#lead", children }) {
  return (
    <section className={`inner-hero shell${children ? "" : " inner-hero-single"}`}>
      <div className="inner-hero-copy">
        <div className="eyebrow"><i /> {eyebrow}</div>
        <h1>{title} {accent && <span>{accent}</span>}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link href={primaryHref} className="primary-btn">{primaryLabel} <ArrowRight size={17} /></Link>
          <Link href="/about-us" className="secondary-btn">Why Trade Firm</Link>
        </div>
      </div>
      {children && <div className="inner-hero-aside">{children}</div>}
    </section>
  );
}
