import type { NextConfig } from 'next';

import initializeBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true'
});

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.STRAPI_URL || 'localhost',
                port: process.env.STRAPI_PORT || '1337',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'diplomatic-moonlight-0fa07877a9.media.strapiapp.com',
                pathname: '/**'
            }
        ]
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production'
    },
    poweredByHeader: false
};

export default withBundleAnalyzer(nextConfig);
