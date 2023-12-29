/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'startupnation.panel.dreamslab.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
