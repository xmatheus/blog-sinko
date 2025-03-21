import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

const nextConfig: NextConfig = {
    output: 'standalone',
    outputFileTracingIncludes: {
        '/*': ['./registry/**/*']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.STRAPI_URL || 'localhost',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'diplomatic-moonlight-0fa07877a9.strapiapp.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'diplomatic-moonlight-0fa07877a9.strapiapp.com',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'diplomatic-moonlight-0fa07877a9.media.strapiapp.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'diplomatic-moonlight-0fa07877a9.media.strapiapp.com',
                pathname: '/uploads/**'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**'
            }
        ]
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },
    poweredByHeader: false,
    experimental: {
        turbo: {
            resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
        }
    }
};

export default withBundleAnalyzer(nextConfig);
