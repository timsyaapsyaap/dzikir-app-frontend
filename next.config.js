/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const nextConfig = withPWA({
//   // reactStrictMode: true,
//   // swcMinify: true,
//   // pwa: {
//   //   dest: "public",
//   //   register: true,
//   //   skipWaiting: true,
//   //   runtimeCaching,
//   //   disable: process.env.NODE_ENV === "development",
//   // },
// });

// module.exports = nextConfig;

// module.exports = withPWA({});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
  },
};

module.exports = withPWA(nextConfig);