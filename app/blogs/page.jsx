import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, FileText } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { blogPosts } from "../../lib/site-content";

export const metadata = {
  title: "Stock Market Research Blogs",
  description: "Read Trade Firm research notes on price action, options, futures, risk management, IPO evaluation and disciplined trading process.",
  alternates: { canonical: "https://www.tradefirm.in/blogs" },
};

export default function BlogsPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="TRADE FIRM BLOGS"
        title="Research notes for"
        accent="better market decisions."
        text="Clear, evergreen articles on market structure, derivatives, IPO evaluation, position sizing and disciplined risk management."
        primaryLabel="Read featured note"
        primaryHref={`/blogs/${featured.slug}`}
      >
        <div className="blog-hero-stack">
          <span><BookOpen size={23} /></span>
          <small>RESEARCH LIBRARY</small>
          <h3>{blogPosts.length} focused notes</h3>
          <p>Price Action • Options • Futures • IPOs • Risk</p>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first">
        <Link className="featured-blog" href={`/blogs/${featured.slug}`}>
          <div className="featured-blog-visual"><FileText size={32} /><span>FEATURED RESEARCH NOTE</span><b>01</b></div>
          <div className="featured-blog-copy"><span>{featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><div><small><Clock3 size={14} /> {featured.readTime}</small><b>Read note <ArrowRight size={16} /></b></div></div>
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
