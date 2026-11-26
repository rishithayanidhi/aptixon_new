/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      { source: "/about", destination: "/?route=about" },
      { source: "/admin", destination: "/?route=admin" },
      { source: "/businesses", destination: "/?route=businesses" },
      {
        source: "/businesses/eventra",
        destination: "/?route=businesses/eventra",
      },
      {
        source: "/businesses/infotech",
        destination: "/?route=businesses/infotech",
      },
      {
        source: "/businesses/infotech/request-a-quote",
        destination: "/?route=businesses/infotech/request-a-quote",
      },
      {
        source: "/businesses/sports",
        destination: "/?route=businesses/sports",
      },
      { source: "/careers", destination: "/?route=careers" },
      { source: "/contact", destination: "/?route=contact" },
      { source: "/employee", destination: "/?route=employee" },
      { source: "/login", destination: "/?route=login" },
      { source: "/projects", destination: "/?route=projects" },
      { source: "/register", destination: "/?route=register" },
      { source: "/worker", destination: "/?route=worker" },
    ];
  },
  async headers() {
    return [
      {
        source: "/legacy/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },
};
export default nextConfig;
