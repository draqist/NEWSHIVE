/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  nextConfig,
  env: {
    customKey: process.env.customKey,
    oldApi: process.env.oldApi,
    abdullahApi: process.env.abdullahApi
  },
} 
