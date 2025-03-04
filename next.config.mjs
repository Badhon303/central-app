/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Usually empty or undefined
        pathname: "/**", // This allows all paths from Unsplash
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "", // Usually empty or undefined
        pathname: "/**", // This allows all paths from Unsplash
      },
    ],
  },
}

export default nextConfig
