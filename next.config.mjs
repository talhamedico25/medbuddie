/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we don't try to use standard React entry points
  distDir: '.next',
};

export default nextConfig;
