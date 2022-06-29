/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    oldApi: process.env.oldApi,
    abdullahApi: process.env.abdullahApi,
    maemoonah: process.env.ckey,
  },
};
