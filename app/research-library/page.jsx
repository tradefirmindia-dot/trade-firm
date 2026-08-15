import Link from "next/link";
import { ArrowRight, BookOpen, Check, Layers3, ShieldCheck } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { contentClusters, getPostsForCluster } from "../../lib/content-clusters";
import { blogPosts } from "../../lib/site-content";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "Indian Stock Market Research Library",
  description: "Explore eight TRADE FIRM research pillars and 60 expert guides on advisory, NIFTY, BANK NIFTY, options, futures, equities, IPOs, price action and risk.",
  keywords: ["stock market research library India", "TRADE FIRM research advisory", "Indian market education"],
  alternates: { canonical: `${siteIdentity.url}/research-library` },
  openGraph: {
    title: "Indian Stock Market Research Library | TRADE FIRM",
    description: "Eight connected research pillars covering Indian market advisory, products, process and risk.",
    url: `${siteIdentity.url}/research-library`,
    images: ["/og-image.jpg"],
  },
};

export default function ResearchLibraryPage() {
  const url = `${siteIdentity.url}/research-library`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: "TRADE FIRM Indian Stock Market Research Library",
        description: "Eight topic pillars connecting 60 expert Indian stock market research and risk guides.",
        isPartOf: { "@id": `${siteIdentity.url}/#website` },
        publisher: { "@id": `${siteIdentity.url}/#organization` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: contentClusters.length,
          itemListElement: contentClusters.map((cluster, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: cluster.title,
            url: `${url}/${cluster.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Research Library", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page research-library-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="TRADE FIRM RESEARCH LIBRARY"
        title="Eight research pillars."
        accent="One connected decision system."
        text="Explore 60 expert guides organised around advisory due diligence, Indian indices, derivatives, equities, IPOs, price action and measurable risk."
        primaryLabel="Browse all insights"
        primaryHref="/blogs"
      >
        <div className="blog-hero-stack">
          <span><BookOpen size={23} /></span>
          <small>TOPICAL AUTHORITY LIBRARY</small>
          <h3>{blogPosts.length} expert guides</h3>
          <p>{contentClusters.length} pillars • 3 tools • Primary-source checks</p>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first">
        <div className="section-head split-head">
          <div><span>TOPIC PILLARS</span><h2>Start with the market question you need to solve.</h2></div>
          <p>Each pillar explains the core framework, then connects service pages, calculators and focused articles through contextual internal links.</p>
        </div>

        <div className="cluster-grid">
          {contentClusters.map((cluster, index) => {
            const count = getPostsForCluster(blogPosts, cluster.slug).length;
            return (
              <Link className="cluster-card" href={`/research-library/${cluster.slug}`} key={cluster.slug}>
                <div><span><Layers3 size={20} /></span><b>{String(index + 1).padStart(2, "0")}</b></div>
                <small>{count} CONNECTED GUIDES</small>
                <h2>{cluster.name}</h2>
                <p>{cluster.description}</p>
                <strong>Open research pillar <ArrowRight size={16} /></strong>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section tools-principles-section">
        <div className="shell tool-principles">
          {[
            [Check, "Clear search intent", "Every page answers a distinct question instead of repeating one keyword across thin pages."],
            [Layers3, "Connected learning path", "Pillars, guides, services and calculators link to the next useful decision."],
            [ShieldCheck, "Risk-aware standard", "Content separates evidence, interpretation and uncertainty without assured-return claims."],
          ].map(([Icon, title, text]) => <article key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}
