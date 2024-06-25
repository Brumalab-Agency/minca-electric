import path from 'path';

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
    ];
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // Ensure native modules are not bundled in the client-side
    if (!isServer) {
      config.externals = {
        ...config.externals,
        'ssh2': 'ssh2'
      };
    }

    // Ensure .node files can be resolved
    config.resolve.extensions.push('.node');

    return config;
  },
};

export default nextConfig;
