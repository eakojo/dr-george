/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: {
    caseSensitiveRoutes: true,
  },
}

module.exports = nextConfig
