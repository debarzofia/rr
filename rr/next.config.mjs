/** @type {import('next').NextConfig} */
const nextConfig = {
  // The menu script attaches its own event listeners once, so Strict Mode's
  // double-run in development must stay off.
  reactStrictMode: false,
};
export default nextConfig;
