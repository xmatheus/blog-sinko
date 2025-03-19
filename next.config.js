/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.STRAPI_HOST || 'localhost',
                port: process.env.STRAPI_PORT || '1337',
                pathname: '/uploads/**',
            },
        ],
    },
};

module.exports = nextConfig;
