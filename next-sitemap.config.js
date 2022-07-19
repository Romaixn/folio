/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://rherault.fr',
  exclude: ['/confirmation'],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}

module.exports = config
