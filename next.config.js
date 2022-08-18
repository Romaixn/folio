if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `)
}

if (!process.env.RHERAULT_API_URL) {
  throw new Error(`
        Please provide a valid API instance URL.
        Add to your environment variables RHERAULT_API_URL.
      `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    domains: ['api.rherault.fr'],
  },
}

module.exports = nextConfig
