/** The pages of the site for search engines: the home page and one page per app the site shows (private ones stay out). */
import type { APIRoute } from "astro";
import { shown } from "../data/apps";

export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const pages = ["/", ...shown.map((a) => `/${a.slug}/`)];
  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, site)}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
