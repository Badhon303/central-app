/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
