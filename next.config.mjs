/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // NOTE: If your GitHub repo is NOT named "yourusername.github.io" 
  // but is a sub-project like "portfolio", uncomment the line below:
  // basePath: '/portfolio',
};

export default nextConfig;
