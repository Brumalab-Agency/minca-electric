/** @type {import('next').NextConfig} */



const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/api/(.*)", // Matches any request to /api/...

        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },

          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },

          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type",
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

        port: "",

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
    ],
  },
  async redirects() {
    return [
      {
        source: '/accesorios',
        destination: '/',
        permanent: true,
      },
      {
        source: '/productos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/especificaciones',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ebikes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/especificaciones-ebikes',
        destination: '/',
        permanent: true,
      },
      
    ]
  },
};

export default nextConfig;
