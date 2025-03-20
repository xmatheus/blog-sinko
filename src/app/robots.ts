import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/_next/', '/static/', '/private/']
        },
        sitemap: process.env.NEXT_PUBLIC_URL + '/sitemap.xml'
    };
}
