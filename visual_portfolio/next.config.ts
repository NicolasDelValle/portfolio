import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Habilita export estático
  images: {
    unoptimized: true, // Necesario para export estático
  },
  // Si vas a subir a una subcarpeta, descomenta y ajusta:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
