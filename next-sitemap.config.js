/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://terabrain.ai',
  generateRobotsTxt: false, // Usiamo il robots.txt manuale
  sitemapSize: 50000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/private', '/_next/*'],
  
  // Transform pages
  transform: async (config, path) => {
    // Exclude dynamic routes that don't exist
    if (path.includes('[') || path.includes(']')) {
      return null;
    }

    // Dynamic priority based on path
    let priority = 0.7;
    if (path === '/') {
      priority = 1.0;
    } else if (path === '/blog') {
      priority = 0.9;
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
    } else if (path.includes('/components') || path.includes('/templates')) {
      priority = 0.6;
    }

    // Change frequency based on content type
    let changefreq = 'daily';
    if (path === '/') {
      changefreq = 'weekly';
    } else if (path === '/blog' || path.startsWith('/blog/')) {
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Additional paths for dynamic content
  additionalPaths: async (config) => {
    const paths = [];

    // Add blog articles dynamically
    try {
      const { pSeoArticles } = require('./utils/pSeo');
      pSeoArticles.forEach((article) => {
        paths.push({
          loc: `/blog/${article.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: article.createdAt,
        });
      });
    } catch (error) {
      console.log('Error loading blog articles:', error);
    }

    return paths;
  },
};
