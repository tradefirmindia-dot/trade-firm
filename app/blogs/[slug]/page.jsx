import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../lib/site-content";
import { contentDates, siteIdentity } from "../../../lib/site-identity";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

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
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const published = post.published || contentDates.published;
  const updated = post.updated || contentDates.modified;
  const pageUrl = `${siteIdentity.url}/blogs/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: pageUrl,
        image: `${siteIdentity.url}/og-image.jpg`,
        datePublished: published,
        dateModified: updated,
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
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><Check size={15} /> {bullet}</li>)}</ul>}
            </section>
          ))}
        </div>

        <aside className="article-source-box"><ExternalLink size={21} /><div><b>Primary-source guidance</b><p>For current rules, filings and product information, verify relevant details through official sources such as <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">SEBI</a>, <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer">NSE India</a> and <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer">BSE India</a>.</p></div></aside>
        <aside className="article-disclosure"><ShieldCheck size={21} /><div><b>Advisory and research scope</b><p>This article explains Trade Firm&apos;s market research framework and general observations. It is not a guaranteed outcome or a substitute for understanding service scope, suitability and market risk.</p></div></aside>
      </article>

      <section className="section related-posts">
        <div className="shell">
          <div className="section-head"><span>CONTINUE READING</span><h2>More advisory and research insights.</h2></div>
          <div className="blog-grid two-blog-grid">{related.map((item) => <Link className="blog-card" href={`/blogs/${item.slug}`} key={item.slug}><div className="blog-card-top"><span>{item.category}</span></div><h3>{item.title}</h3><p>{item.excerpt}</p><div className="blog-card-bottom"><small>{item.readTime}</small><ArrowRight size={18} /></div></Link>)}</div>
        </div>
      </section>
    </main>
  );
}
