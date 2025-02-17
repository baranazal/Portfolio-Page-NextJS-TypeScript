/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    domains: ['your-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'punycode': false,
      }
    }
    return config
  },
      
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },

};

export default config;