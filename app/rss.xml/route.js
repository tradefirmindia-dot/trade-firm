import { blogPosts } from "../../lib/site-content";
import { contentDates, siteIdentity } from "../../lib/site-identity";

function escapeXml(value) {
  return String(value).replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;" })[char]);
}

export function GET() {
  const items = blogPosts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteIdentity.url}/blogs/${post.slug}</link>
      <guid>${siteIdentity.url}/blogs/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.published || contentDates.published).toUTCString()}</pubDate>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Trade Firm Research Desk</title>
      <link>${siteIdentity.url}/blogs</link>
      <description>Indian stock market advisory, research and risk-management insights.</description>
      <language>en-IN</language>
      <lastBuildDate>${new Date(contentDates.modified).toUTCString()}</lastBuildDate>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
