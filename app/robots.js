export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://www.tradefirm.in/sitemap.xml",
    host: "https://www.tradefirm.in",
  };
}
