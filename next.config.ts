/** @type {import('next').NextConfig} */

const repoName = 'wedding-template';
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
