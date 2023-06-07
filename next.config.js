/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const dotnev = require("dotenv");

const res = dotnev.config({
  path: "./.env",
});
module.exports = {
  env: {
    ENV: res.parsed.ENV,
    BACKEND_URL: res.parsed.BACKEND_URL,
    BACKEND_GRAPHQL_URL: res.parsed.BACKEND_GRAPHQL_URL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  nextConfig,
};
