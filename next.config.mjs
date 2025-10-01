/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'app', 'styles')],
    additionalData: `@use "variables" as *;`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/design-co-ucsd/**'
      }
    ],
    qualities: [50, 90, 100]
  }
};

export default nextConfig;
