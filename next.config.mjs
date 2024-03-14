/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            // Puedes dejar el campo del puerto vacío si no es relevante
            port: '',
            // El pathname debe ser el patrón de la ruta de tus imágenes en el dominio remoto
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'test.mincaelectric.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'localy.local',
            port: '',
            pathname: '/**',
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
      distDir: 'netlify_output',
};


export default withVideos(nextConfig);

