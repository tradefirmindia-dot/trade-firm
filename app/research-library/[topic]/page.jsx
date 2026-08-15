import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import PageIntro from "../../../components/PageIntro";
import { contentClusters, getContentCluster, getPostsForCluster } from "../../../lib/content-clusters";
import { blogPosts } from "../../../lib/site-content";
import { contentDates, siteIdentity } from "../../../lib/site-identity";

export function generateStaticParams() {
  return contentClusters.map((cluster) => ({ topic: cluster.slug }));
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  const cluster = getContentCluster(topic);
  if (!cluster) return {};

  const url = `${siteIdentity.url}/research-library/${cluster.slug}`;
  return {
    title: cluster.title,
    description: cluster.description,
    keywords: cluster.keywords,
    alternates: { canonical: url },
    openGraph: { title: `${cluster.title} | TRADE FIRM`, description: cluster.description, url, images: ["/og-image.jpg"] },
    twitter: { card: "summary_large_image", title: cluster.title, description: cluster.description, images: ["/og-image.jpg"] },
  };
}

export default async function ResearchTopicPage({ params }) {
  const { topic } = await params;
  const cluster = getContentCluster(topic);
  if (!cluster) notFound();

  const posts = getPostsForCluster(blogPosts, cluster.slug);
  const url = `${siteIdentity.url}/research-library/${cluster.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        url,
        name: cluster.title,
        description: cluster.description,
        dateModified: contentDates.modified,
        isPartOf: { "@id": `${siteIdentity.url}/#website` },
        publisher: { "@id": `${siteIdentity.url}/#organization` },
        about: cluster.keywords.map((name) => ({ "@type": "Thing", name })),
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: `${siteIdentity.url}/blogs/${post.slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Research Library", item: `${siteIdentity.url}/research-library` },
          { "@type": "ListItem", position: 3, name: cluster.name, item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page research-topic-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="RESEARCH LIBRARY / TOPIC PILLAR"
        title={cluster.name}
        accent="research framework."
        text={cluster.description}
        primaryLabel="Explore related service"
        primaryHref={cluster.serviceHref}
      >
        <div className="blog-hero-stack">
          <span><Layers3 size={23} /></span>
          <small>CONNECTED TOPIC CLUSTER</small>
          <h3>{posts.length} focused guides</h3>
          <p>Framework • Evidence • Risk • Review</p>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first pillar-overview">
        <Link className="article-back" href="/research-library"><ArrowLeft size={16} /> All research pillars</Link>
        <div className="pillar-intro"><span>PILLAR OVERVIEW</span><h2>{cluster.title}</h2><p>{cluster.intro}</p></div>
        <div className="pillar-section-grid">
          {cluster.sections.map((section, index) => (
            <article key={section.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.points && <ul>{section.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul>}
            </article>
          ))}
        </div>
        <div className="pillar-actions">
          <Link href={cluster.serviceHref}>Related research service <ArrowRight size={15} /></Link>
          <Link href={cluster.toolHref}>Use the related calculator <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="section related-posts">
        <div className="shell">
          <div className="section-head split-head"><div><span>FOCUSED GUIDES</span><h2>Continue from framework to specific decisions.</h2></div><p>Every guide links back to this pillar and onward to relevant services, tools and related research.</p></div>
          <div className="blog-grid blog-index-grid">
            {posts.map((post) => (
              <Link className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}>
                <div className="blog-card-top"><span>{post.category}</span><Clock3 size={15} /></div>
                <h3>{post.title}</h3><p>{post.excerpt}</p>
                <div className="blog-card-bottom"><small>{post.readTime}</small><ArrowRight size={18} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
