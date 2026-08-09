import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../lib/site-content";

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
    alternates: { canonical: `https://www.tradefirm.in/blogs/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="inner-page article-page">
      <article className="article-shell shell">
        <Link className="article-back" href="/blogs"><ArrowLeft size={16} /> All research blogs</Link>
        <div className="article-meta"><span>{post.category}</span><small><Clock3 size={14} /> {post.readTime}</small></div>
        <h1>{post.title}</h1>
        <p className="article-lead">{post.excerpt}</p>
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

        <aside className="article-disclosure"><ShieldCheck size={21} /><div><b>Research note scope</b><p>This note presents Trade Firm&apos;s research framework and market observations. Consider your objectives, time horizon and risk capacity before acting on a market view.</p></div></aside>
      </article>

      <section className="section related-posts">
        <div className="shell">
          <div className="section-head"><span>CONTINUE READING</span><h2>More from the research library.</h2></div>
          <div className="blog-grid two-blog-grid">{related.map((item) => <Link className="blog-card" href={`/blogs/${item.slug}`} key={item.slug}><div className="blog-card-top"><span>{item.category}</span></div><h3>{item.title}</h3><p>{item.excerpt}</p><div className="blog-card-bottom"><small>{item.readTime}</small><ArrowRight size={18} /></div></Link>)}</div>
        </div>
      </section>
    </main>
  );
}
