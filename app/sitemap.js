import { blogPosts } from "../lib/site-content";
import { contentClusters } from "../lib/content-clusters";
import { seoServicePageList } from "../lib/seo-pages";
import { contentDates, siteIdentity } from "../lib/site-identity";

export default function sitemap() {
  const updated = new Date(contentDates.modified);
  const routes = [
    ["", "weekly", 1],
    ["/research-services", "weekly", 0.9],
    ["/forex-broker-india", "weekly", 0.95],
    ["/tools", "monthly", 0.8],
    ["/tools/risk-planner", "monthly", 0.9],
    ["/tools/risk-reward-calculator", "monthly", 0.9],
    ["/tools/drawdown-recovery-calculator", "monthly", 0.9],
    ["/blogs", "weekly", 0.8],
    ["/research-library", "weekly", 0.9],
    ["/about-us", "monthly", 0.7],
    ["/contact", "monthly", 0.8],
    ["/trust-centre", "monthly", 0.75],
    ["/research-methodology", "monthly", 0.75],
    ["/editorial-policy", "monthly", 0.6],
    ["/risk-disclosure", "monthly", 0.7],
    ["/grievance-redressal", "monthly", 0.6],
    ["/privacy-policy", "yearly", 0.4],
    ["/terms-of-use", "yearly", 0.4],
    ["/authors/trade-firm-research-desk", "monthly", 0.7],
    ["/sample-research-report", "monthly", 0.75],
  ];

  return [
    ...routes.map(([path, changeFrequency, priority]) => ({
      url: `${siteIdentity.url}${path}`,
      lastModified: updated,
      changeFrequency,
      priority,
    })),
    ...seoServicePageList.map((page) => ({
      url: `${siteIdentity.url}/${page.slug}`,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
    ...contentClusters.map((cluster) => ({
      url: `${siteIdentity.url}/research-library/${cluster.slug}`,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteIdentity.url}/blogs/${post.slug}`,
      lastModified: new Date(post.updated || post.published || contentDates.modified),
      changeFrequency: "monthly",
      priority: 0.65,
    })),
  ];
}
