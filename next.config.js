if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2]],
  },
}

module.exports = nextConfig
