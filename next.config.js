/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        hostname: "media-assets.wired.it",
      },

      {
        hostname: "www.satisfiction.eu",
      },
    ],
  },
};

module.exports = nextConfig;
