import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/_next/', '/static/', '/private/']
        },
        sitemap: 'https://seu-dominio.com/sitemap.xml'
    };
}
