/** @type {import('next').NextConfig} */

const repoName = 'wedding-page';
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',

  // (optional) Add other configs here, like trailingSlash if needed:
  // trailingSlash: true,
};

export default nextConfig;
