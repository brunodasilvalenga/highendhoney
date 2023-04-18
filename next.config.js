/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "placekitten.com", "randomuser.me"],
  },
};

module.exports = nextConfig;
