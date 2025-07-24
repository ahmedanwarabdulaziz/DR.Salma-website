/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Production Strapi domain
      {
        protocol: 'https',
        hostname: 'dr-salma-blog-strapi-jb5yink43-dr-salmas-projects.vercel.app',
        pathname: '/uploads/**',
      },
    ],
  },
  env: {
    // Use environment variable or fallback to deployed Strapi URL
    STRAPI_URL: process.env.STRAPI_URL || 'https://dr-salma-blog-strapi-jb5yink43-dr-salmas-projects.vercel.app',
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || 'https://dr-salma-blog-strapi-jb5yink43-dr-salmas-projects.vercel.app',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 