/**
 * Sitemap.xml generator
 * Creates an XML sitemap for search engine indexing
 */

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const SITE_URL = process.env.VITE_SITE_URL || 'https://yourportfolio.com';

// Define all pages in your portfolio
const PAGES: SitemapUrl[] = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/projects',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/skills',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: '/education',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
  },
];

export const generateSitemap = (pages: SitemapUrl[] = PAGES): string => {
  const urlEntries = pages
    .map((page) => {
      return `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
};

export default generateSitemap;
