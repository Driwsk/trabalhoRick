/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"], // Adicione o domínio da API aqui
  },
};

module.exports = nextConfig;
