import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['img.spoonacular.com'],
  },
};

export default nextConfig;
