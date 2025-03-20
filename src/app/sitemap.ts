import { MetadataRoute } from 'next';

import { getStrapiURL } from '@/utils/get-strapi-url';

async function getPosts() {
    const res = await fetch(`${getStrapiURL()}/api/new-articles?populate=*`, {
        next: { revalidate: 3600 } // Revalidate a cada 1 hora
    });

    if (!res.ok) {
        return [];
    }

    const data = await res.json();

    return data.data || [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPosts();
    const baseUrl = 'https://seu-dominio.com';

    const postUrls = posts.map((post: any) => ({
        url: `${baseUrl}/postagens/${post.attributes.slug}`,
        lastModified: new Date(post.attributes.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }));

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1
        },
        {
            url: `${baseUrl}/postagens`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9
        }
    ];

    return [...staticPages, ...postUrls];
}
