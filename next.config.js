/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["admin-stay.herokuapp.com"],
  },
  env: {
    API_BACKEND: process.env.NEXT_PUBLIC_API_BACKEND,
  },
};
