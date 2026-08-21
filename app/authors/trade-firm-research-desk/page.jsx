import Link from "next/link";
import { ArrowRight, BookOpen, Check, FileSearch, ShieldCheck } from "lucide-react";
import PageIntro from "../../../components/PageIntro";
import { blogPosts } from "../../../lib/site-content";
import { siteIdentity } from "../../../lib/site-identity";

export const metadata = {
  title: "Research Desk Author & Editorial Profile",
  description: "Meet the Trade Firm Research Desk and review its Indian market coverage, research methodology, editorial standards and published insights.",
  alternates: { canonical: `${siteIdentity.url}/authors/trade-firm-research-desk` },
};

export default function ResearchDeskAuthorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteIdentity.url}/authors/trade-firm-research-desk#author`,
    name: "Trade Firm Research Desk",
    url: `${siteIdentity.url}/authors/trade-firm-research-desk`,
    parentOrganization: { "@id": `${siteIdentity.url}/#organization` },
    knowsAbout: ["Indian stock market research", "NIFTY and BANK NIFTY", "Options and futures", "Equity research", "IPO research", "Risk management"],
  };

  return (
    <main className="inner-page author-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow="AUTHOR & EDITORIAL PROFILE" title="Trade Firm" accent="Research Desk." text="The Trade Firm Research Desk publishes process-led Indian market education and research across indices, derivatives, equities, IPOs and risk management.">
        <div className="author-hero-card"><FileSearch size={31} /><span>RESEARCH COVERAGE</span><strong>SINCE 2015</strong><p>A market journey built through hands-on study and reflected in structured, risk-aware content.</p></div>
      </PageIntro>

      <section className="section shell inner-section-first author-grid">
        <article><BookOpen size={24} /><h2>What the desk covers</h2><p>Indian index structure, NIFTY and BANK NIFTY, options and futures mechanics, selected equity research, IPO evaluation, position sizing and decision review.</p><ul>{["Market structure before a view", "Primary information where relevant", "Balanced scenarios and invalidation", "Clear distinction between evidence and interpretation"].map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul></article>
        <article><ShieldCheck size={24} /><h2>Editorial standard</h2><p>Content avoids assured-return language and makes limitations visible. Material corrections and updates are handled under the published editorial policy.</p><div className="trust-links"><Link href="/research-methodology">Research methodology <ArrowRight size={15} /></Link><Link href="/editorial-policy">Editorial policy <ArrowRight size={15} /></Link><Link href="/risk-disclosure">Risk disclosure <ArrowRight size={15} /></Link></div></article>
      </section>

      <section className="section related-posts"><div className="shell"><div className="section-head split-head"><div><span>RECENT PUBLISHED GUIDES</span><h2>Research Desk insights.</h2></div><p>Evergreen guides created to help readers evaluate market decisions, products and risk.</p></div><div className="blog-grid">{blogPosts.slice(0, 3).map((post) => <Link className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}><div className="blog-card-top"><span>{post.category}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-card-bottom"><small>{post.readTime}</small><ArrowRight size={18} /></div></Link>)}</div></div></section>
    </main>
  );
}
