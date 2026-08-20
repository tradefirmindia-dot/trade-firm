import Link from "next/link";
import { ArrowRight, BarChart3, Check, Clock3, FileSearch, Layers3, ShieldCheck } from "lucide-react";
import PageIntro from "./PageIntro";
import { blogPosts } from "../lib/site-content";
import { contentUpdatedAt, siteUrl } from "../lib/seo-pages";

const icons = [FileSearch, BarChart3, Layers3, ShieldCheck];

export default function SeoServicePage({ page }) {
  const url = `${siteUrl}/${page.slug}`;
  const updated = page.updated || contentUpdatedAt;
  const relatedPosts = page.relatedBlogs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        dateModified: updated,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.metaTitle.replace(" | Trade Firm", ""),
        serviceType: page.keywords[0],
        description: page.metaDescription,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        audience: { "@type": "Audience", audienceType: "Indian securities-market participants" },
        url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Advisory & Research Services", item: `${siteUrl}/research-services` },
          { "@type": "ListItem", position: 3, name: page.metaTitle.replace(" | Trade Firm", ""), item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow={page.eyebrow} title={page.title} accent={page.accent} text={page.intro}>
        <div className="hero-index-panel seo-hero-panel">
          <span>{page.heroLabel}</span>
          <div>{page.heroItems.map((item) => <b key={item}>{item}</b>)}</div>
          <p>{page.heroNote}</p>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first">
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/research-services">Services</Link><span>/</span><b>{page.metaTitle.replace(" | Trade Firm", "")}</b>
        </nav>
        <div className="section-head split-head seo-section-head">
          <div><span>{page.overviewEyebrow}</span><h2>{page.overviewTitle}</h2></div>
          <p>{page.overviewText}</p>
        </div>

        <div className="service-detail-grid seo-service-grid">
          {page.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <article className="service-detail-card" key={card.title}>
                <div className="service-detail-head"><span><Icon size={22} /></span><small>{card.tag}</small><b>0{index + 1}</b></div>
                <h3>{card.title}</h3><p>{card.text}</p>
                <ul>{card.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section seo-deep-dive-section">
        <div className="shell seo-deep-dive-shell">
          <div className="section-head split-head">
            <div><span>IN-DEPTH GUIDANCE</span><h2>{page.deepDiveTitle}</h2></div>
            <p>{page.deepDiveIntro}</p>
          </div>
          <div className="seo-deep-dive-grid">
            {page.deepDive.map((item, index) => (
              <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
          {page.priorityLinks?.length > 0 && (
            <div className="seo-topic-paths">
              <div><span>RELATED RESEARCH PATHS</span><p>Continue with the service, guide or tool that matches your next market decision.</p></div>
              <nav className="identity-actions" aria-label="Related research paths">
                {page.priorityLinks.map((link) => <Link href={link.href} key={link.href}>{link.label} <ArrowRight size={15} /></Link>)}
              </nav>
            </div>
          )}
        </div>
      </section>

      <section className="section shell research-format-section seo-process-section">
        <div className="research-format-copy">
          <span>HOW THE PROCESS WORKS</span>
          <h2>{page.processTitle}</h2>
          <p>{page.processText}</p>
          <Link className="primary-btn" href="/contact">Speak with our desk <ArrowRight size={17} /></Link>
        </div>
        <div className="research-format-list">
          {page.process.map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section related-posts seo-related-posts">
          <div className="shell">
            <div className="section-head split-head">
              <div><span>RELATED PROFESSIONAL INSIGHTS</span><h2>Understand the research behind the service.</h2></div>
              <p>Detailed guides covering process, product behaviour, risk communication and responsible market decisions.</p>
            </div>
            <div className="blog-grid">
              {relatedPosts.map((post) => (
                <Link className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}>
                  <div className="blog-card-top"><span>{post.category}</span><Clock3 size={15} /></div>
                  <h3>{post.title}</h3><p>{post.excerpt}</p>
                  <div className="blog-card-bottom"><small>{post.readTime}</small><ArrowRight size={18} /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section shell" id="faq">
        <div className="section-head split-head"><div><span>COMMON QUESTIONS</span><h2>Clear answers before you decide.</h2></div><p>Understand the process, limitations and risk before using any market service.</p></div>
        <div className="faq-list">
          {page.faqs.map(([question, answer]) => <details key={question}><summary>{question}<ArrowRight size={18} /></summary><p>{answer}</p></details>)}
        </div>
      </section>
    </main>
  );
}
