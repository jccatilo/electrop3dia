/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This enables static HTML export
  reactStrictMode: true,
  allowedDevOrigins: [
    '192.168.103.118',
    'electrop3dia.trioe.dev'
  ],
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;