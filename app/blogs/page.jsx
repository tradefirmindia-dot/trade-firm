import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, FileText } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { contentClusters, getPostsForCluster } from "../../lib/content-clusters";
import { blogPosts } from "../../lib/site-content";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "Stock Market Research & Advisory Insights India",
  description: "Read dated TRADE FIRM market notes and expert guides across Indian stock market advisory, NIFTY, BANK NIFTY, derivatives, IPOs and risk management.",
  alternates: { canonical: "https://www.tradefirm.in/blogs" },
};

export default function BlogsPage() {
  const [featured, ...posts] = blogPosts;
  const url = `${siteIdentity.url}/blogs`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: "TRADE FIRM Stock Market Research and Advisory Guides",
        description: `A ${blogPosts.length}-article Indian stock market research, advisory and risk-management library.`,
        isPartOf: { "@id": `${siteIdentity.url}/#website` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: blogPosts.length,
          itemListElement: blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: `${siteIdentity.url}/blogs/${post.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Blogs", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="TRADE FIRM INSIGHTS"
        title="Advisory insight for"
        accent="informed market decisions."
        text="Dated market notes and detailed guides on advisory services, market structure, NIFTY and BANK NIFTY, derivatives, IPO evaluation and disciplined risk management."
        primaryLabel="Read featured note"
        primaryHref={`/blogs/${featured.slug}`}
      >
        <div className="blog-hero-stack">
          <span><BookOpen size={23} /></span>
          <small>ADVISORY &amp; RESEARCH LIBRARY</small>
          <h3>{blogPosts.length} professional insights</h3>
          <p>Advisory • Research • Options • Futures • IPOs • Risk</p>
        </div>
      </PageIntro>

      <section className="section shell research-cluster-strip">
        <div className="section-head split-head"><div><span>8 RESEARCH PILLARS</span><h2>Browse by decision, product or risk question.</h2></div><p>Topic hubs connect every guide with relevant service pages and free calculators.</p></div>
        <div className="cluster-chip-grid">
          {contentClusters.map((cluster) => (
            <Link href={`/research-library/${cluster.slug}`} key={cluster.slug}>
              <span>{getPostsForCluster(blogPosts, cluster.slug).length} guides</span>
              <b>{cluster.name}</b>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell blog-library-list">
        <Link className="featured-blog" href={`/blogs/${featured.slug}`}>
          <div className="featured-blog-visual"><FileText size={32} /><span>FEATURED MARKET INSIGHT</span><b>01</b></div>
          <div className="featured-blog-copy"><span>{featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><div><small><Clock3 size={14} /> {featured.readTime}</small><b>Read insight <ArrowRight size={16} /></b></div></div>
        </Link>

        <div className="blog-grid blog-index-grid">
          {posts.map((post, index) => (
            <Link className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}>
              <div className="blog-card-top"><span>{post.category}</span><b>{String(index + 2).padStart(2, "0")}</b></div>
              <h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-card-bottom"><small>{post.readTime}</small><ArrowRight size={18} /></div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
