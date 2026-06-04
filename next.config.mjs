/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Lint is run separately; don't let it block production builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
