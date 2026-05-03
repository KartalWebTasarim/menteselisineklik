const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname),
  },
};

module.exports = nextConfig;
