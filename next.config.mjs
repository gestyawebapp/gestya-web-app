/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/servicios-oficiales",
        destination: "/servicios-oficiales/index.html",
      },
      {
        source: "/servicios-oficiales/gracias",
        destination: "/servicios-oficiales/gracias.html",
      },
    ];
  },
};

export default nextConfig;
