/** @type {import('next').NextConfig} */

const repoName = 'wedding-template';
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' && isGithubPages ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' && isGithubPages ? `/${repoName}/` : '',

  // (optional) Add other configs here, like trailingSlash if needed:
  // trailingSlash: true,
};

export default nextConfig;
