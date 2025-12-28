/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'app', 'components', 'lib', 'pages']
  },
  images: {
    domains: ['img.freepik.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig