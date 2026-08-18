/**
 * Robots.txt generator
 * Defines crawling rules for search engines
 */

const SITE_URL = "https://barshakhonju.com.np"; // Replace with your actual site URL

export const generateRobots = (): string => {
  return `# Robots.txt for ${SITE_URL}
# This file tells search engines which pages they can and cannot crawl

User-agent: *
Allow: /
Disallow: /private/
Disallow: /.git/
Disallow: /node_modules/

# Allow specific crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay (optional - in seconds)
Crawl-delay: 0
`;
};

export default generateRobots;
