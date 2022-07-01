/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    REQUEST_API: process.env.CUSTOM_KEY,
  },
};
