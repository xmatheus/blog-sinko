import { MetadataRoute } from 'next';

import { getAllPages } from '@/cms/strapi/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPages();

    const baseUrl = process.env.NEXT_PUBLIC_URL || '';

    const postUrls = posts.map((post: any) => ({
        url: `${baseUrl}/postagens/${post.slug}`,
        lastModified: new Date(post.updatedAt),
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
