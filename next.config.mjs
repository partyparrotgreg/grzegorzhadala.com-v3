/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/", // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/", // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "/", // Matched parameters can be used in the destination
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "datocms-assets.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
