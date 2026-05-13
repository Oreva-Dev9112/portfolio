/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: { root: __dirname },
  // If deploying to https://USER.github.io/REPO/, uncomment and set:
  // basePath: '/oreva.dev',
  // assetPrefix: '/oreva.dev/',
  trailingSlash: true,
};

module.exports = nextConfig;
