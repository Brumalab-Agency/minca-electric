/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/api/(.*)",
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
            // DOES NOT WORK
            // value: process.env.ALLOWED_ORIGIN,
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // Puedes dejar el campo del puerto vacío si no es relevante
        port: "",
        // El pathname debe ser el patrón de la ruta de tus imágenes en el dominio remoto
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "test.mincaelectric.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localy.local",
        port: "",
        pathname: "/**",
      },
      // Agrega otros objetos para cada URL remota según sea necesario
      // Por ejemplo:
      // {
      //   protocol: 'https',
      //   hostname: 'otraurl.com',
      //   port: '',
      //   pathname: '/**',
      // }
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
};

export default withVideos(nextConfig);
