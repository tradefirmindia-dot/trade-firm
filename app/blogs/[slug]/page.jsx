import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, ExternalLink, Layers3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { getContentCluster, getPostClusterSlug } from "../../../lib/content-clusters";
import { blogPosts, getBlogPost } from "../../../lib/site-content";
import { contentDates, siteIdentity } from "../../../lib/site-identity";

function headingId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function wordCount(post) {
  const text = [post.title, post.excerpt, post.intro, ...post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets || [])])].join(" ");
  return text.trim().split(/\s+/).length;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const cluster = getContentCluster(getPostClusterSlug(post));
  const published = post.published || contentDates.published;
  const updated = post.updated || contentDates.modified;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, post.title, "stock market advisory India", "stock market research India"],
    alternates: { canonical: `https://www.tradefirm.in/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.tradefirm.in/blogs/${post.slug}`,
      images: ["/og-image.jpg"],
      publishedTime: published,
      modifiedTime: updated,
      authors: [`${siteIdentity.url}/authors/trade-firm-research-desk`],
      section: cluster?.name || post.category,
      tags: [post.category, ...(cluster?.keywords || [])],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/og-image.jpg"] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const clusterSlug = getPostClusterSlug(post);
  const cluster = getContentCluster(clusterSlug);
  const sameCluster = blogPosts.filter((item) => item.slug !== post.slug && getPostClusterSlug(item) === clusterSlug);
  const fallback = blogPosts.filter((item) => item.slug !== post.slug && getPostClusterSlug(item) !== clusterSlug);
  const related = [...sameCluster, ...fallback].slice(0, 5);
  const published = post.published || contentDates.published;
  const updated = post.updated || contentDates.modified;
  const pageUrl = `${siteIdentity.url}/blogs/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: pageUrl,
        image: `${siteIdentity.url}/og-image.jpg`,
        datePublished: published,
        dateModified: updated,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        articleSection: cluster?.name || post.category,
        wordCount: wordCount(post),
        keywords: [post.category, ...(cluster?.keywords || [])],
        isPartOf: { "@id": `${siteIdentity.url}/research-library/${clusterSlug}#collection` },
        about: (cluster?.keywords || []).map((name) => ({ "@type": "Thing", name })),
        citation: ["https://www.sebi.gov.in", "https://www.nseindia.com", "https://www.bseindia.com"],
        author: { "@id": `${siteIdentity.url}/authors/trade-firm-research-desk#author` },
        publisher: { "@id": `${siteIdentity.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${siteIdentity.url}/blogs` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="inner-page article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="article-shell shell">
        <Link className="article-back" href="/blogs"><ArrowLeft size={16} /> All research blogs</Link>
        <Link className="article-topic-link" href={`/research-library/${clusterSlug}`}><Layers3 size={15} /> {cluster?.name || "Research Library"}</Link>
        <div className="article-meta"><span>{post.category}</span><small><Clock3 size={14} /> {post.readTime}</small></div>
        <h1>{post.title}</h1>
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-trustline">
          <span>By <Link href="/authors/trade-firm-research-desk">Trade Firm Research Desk</Link></span>
          <span>Published {new Date(published).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>Reviewed {new Date(updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <div className="article-divider"><i /></div>

        <div className="article-content">
          <p className="article-intro">{post.intro}</p>
          <nav className="article-toc" aria-label="In this guide">
            <span>IN THIS GUIDE</span>
            {post.sections.map((section, index) => <a href={`#${headingId(section.title)}`} key={section.title}><b>{String(index + 1).padStart(2, "0")}</b>{section.title}</a>)}
          </nav>
          {post.sections.map((section) => (
            <section id={headingId(section.title)} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><Check size={15} /> {bullet}</li>)}</ul>}
            </section>
          ))}
        </div>

        <aside className="article-next-steps">
          <Layers3 size={21} />
          <div><b>Continue this research path</b><p>Move from this focused guide to its full topic framework, relevant service and decision calculator.</p>
            <nav>
              <Link href={`/research-library/${clusterSlug}`}>{cluster?.name || "Research pillar"} <ArrowRight size={14} /></Link>
              <Link href={cluster?.serviceHref || "/research-services"}>Related advisory or research service <ArrowRight size={14} /></Link>
              <Link href={cluster?.toolHref || "/tools"}>Related risk calculator <ArrowRight size={14} /></Link>
              <Link href="/research-methodology">TRADE FIRM research methodology <ArrowRight size={14} /></Link>
            </nav>
          </div>
        </aside>

        <aside className="article-source-box"><ExternalLink size={21} /><div><b>Primary-source guidance</b><p>For current rules, filings and product information, verify relevant details through official sources such as <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">SEBI</a>, <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer">NSE India</a> and <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer">BSE India</a>.</p></div></aside>
        <aside className="article-disclosure"><ShieldCheck size={21} /><div><b>Advisory and research scope</b><p>This article explains Trade Firm&apos;s market research framework and general observations. It is not a guaranteed outcome or a substitute for understanding service scope, suitability and market risk.</p></div></aside>
      </article>

      <section className="section related-posts">
        <div className="shell">
          <div className="section-head"><span>CONTINUE THIS TOPIC</span><h2>Related {cluster?.name.toLowerCase() || "advisory and research"} guides.</h2></div>
          <div className="blog-grid two-blog-grid">{related.map((item) => <Link className="blog-card" href={`/blogs/${item.slug}`} key={item.slug}><div className="blog-card-top"><span>{item.category}</span></div><h3>{item.title}</h3><p>{item.excerpt}</p><div className="blog-card-bottom"><small>{item.readTime}</small><ArrowRight size={18} /></div></Link>)}</div>
        </div>
      </section>
    </main>
  );
}
