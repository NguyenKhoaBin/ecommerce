/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;
module.exports = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "cdn.sanity.io",
      "salt.tikicdn.com",
      "lh3.googleusercontent.com",
    ],
  },
};
