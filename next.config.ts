/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static HTML export
  reactStrictMode: true,
  allowedDevOrigins: [
    '0.0.0.0',
    '192.168.103.118'
  ],
  swcMinify: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;