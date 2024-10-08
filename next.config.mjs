/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'app', 'styles')],
    additionalData: `@import "variables.scss";`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/design-co-ucsd/**'
      },
      {
        protocol: 'https',
        hostname: 'ucsddesign.co',
        pathname: '/static/media/**'
      }
    ]
  }
};

export default nextConfig;
