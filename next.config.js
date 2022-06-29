/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    maemoonah: process.env.maemoonah,
    oldApi: process.env.oldApi,
    abdullahApi: process.env.abdullahApi,
    maemoonah: process.env.ckey,
  },
};
