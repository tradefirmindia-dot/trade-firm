import { blogPosts } from "../lib/site-content";

export default function sitemap() {
  const updated = new Date();
  const routes = [
    ["", "weekly", 1],
    ["/research-services", "weekly", 0.9],
    ["/tools", "monthly", 0.8],
    ["/tools/risk-planner", "monthly", 0.9],
    ["/blogs", "weekly", 0.8],
    ["/about-us", "monthly", 0.7],
  ];

  return [
    ...routes.map(([path, changeFrequency, priority]) => ({
      url: `https://www.tradefirm.in${path}`,
      lastModified: updated,
      changeFrequency,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `https://www.tradefirm.in/blogs/${post.slug}`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.65,
    })),
  ];
}
