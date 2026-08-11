import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import PageIntro from "./PageIntro";
import { siteIdentity } from "../lib/site-identity";

export default function TrustPage({ page }) {
  const url = `${siteIdentity.url}/${page.slug}`;
  const pageName = page.metaTitle.split(" | ")[0];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.metaTitle, description: page.metaDescription, isPartOf: { "@id": `${siteIdentity.url}/#website` } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url }, { "@type": "ListItem", position: 2, name: pageName, item: url }] },
    ],
  };

  return (
    <main className="inner-page trust-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow={page.eyebrow} title={page.title} accent={page.accent} text={page.intro} primaryLabel="Contact Trade Firm" primaryHref="/contact">
        <div className="trust-fact-panel">
          <ShieldCheck size={27} />
          <span>QUICK REFERENCE</span>
          <div>{page.facts.map(([label, value]) => <p key={label}><small>{label}</small><b>{value}</b></p>)}</div>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first trust-content">
        <nav className="page-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/trust-centre">Trust Centre</Link><span>/</span><b>{pageName}</b></nav>
        <div className="trust-content-grid">
          {page.sections.map((section, index) => (
            <article key={section.title}>
              <span>0{index + 1}</span>
              <div><h2>{section.title}</h2><p>{section.text}</p>
                {section.points && <ul>{section.points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul>}
                {section.links && <div className="trust-links">{section.links.map(([label, href]) => <Link href={href} key={href}>{label} <ArrowRight size={15} /></Link>)}</div>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
