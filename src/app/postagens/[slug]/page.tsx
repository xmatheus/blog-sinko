import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getContentBySlug, getPageBySlug } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';
import { ArticleTags } from '@/components/ArticleTags';
import AutoBreadcrumbs from '@/components/Auto-breadcrumbs';
import { BannerImage } from '@/components/BannerImage';
import { BlockRenderer } from '@/components/BlockRenderer';
import { FontSizeControl } from '@/components/FontSizeControl';
import { Grid } from '@/components/Grid';
import { PostHeader } from '@/components/PostHeader';
import { ArticleStructuredData } from '@/components/SEO/MetaTags';
import { TableOfContents } from '@/components/TableOfContents';
import { getStrapiURL } from '@/utils/get-strapi-url';

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = (await params).slug;
    const { data } = await getPageBySlug(slug);

    if (data.length === 0) {
        return {
            title: 'Post não encontrado',
            description: 'O post que você está procurando não foi encontrado.'
        };
    }

    const post = data[0];
    const imageUrl = post.bannerImage?.img?.url
        ? `${getStrapiURL()}${post.bannerImage.img.url}`
        : 'https://dominio.com/og-image.jpg';

    return {
        title: post.title,
        description: post.description || post.title,
        openGraph: {
            title: post.title,
            description: post.description || post.title,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description || post.title,
            images: [imageUrl]
        }
    };
}

async function loader(slug: string): Promise<{ post: NewArticle }> {
    const response = await getPageBySlug(slug);

    if (response.data.length === 0) notFound();

    return { post: response.data[0] };
}

export default async function DynamicPageRoute({ params }: PageProps) {
    const slug = (await params).slug;
    const { post } = await loader(slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description || post.title,
        image: post.bannerImage?.img?.url ? `${getStrapiURL()}${post.bannerImage.img.url}` : '',
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
            '@type': 'Organization',
            name: post.author?.name
        }
    };

    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/postagens/${slug}`;

    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ArticleStructuredData
                article={{
                    title: post.title,
                    ogImage: post.bannerImage?.img?.url,
                    publishedTime: post.publishedAt,
                    modifiedTime: post.updatedAt,
                    authors: [post.author?.name || ''],
                    tags: post.tags?.map((tag) => tag.title) || []
                }}
            />
            <Grid>
                <article className='container flex w-full flex-col gap-8 lg:max-w-[745px]'>
                    <AutoBreadcrumbs />
                    <PostHeader post={post} />
                    <BannerImage src={post.bannerImage?.img?.url} alt={post.bannerImage?.alt} />
                    <FontSizeControl title={post.title} url={currentUrl} />
                    <TableOfContents content={post.blocks || []} />
                    <div className='article-content'>
                        <BlockRenderer blocks={post.blocks || []} />
                    </div>
                    <ArticleTags post={post} />
                </article>
            </Grid>
        </>
    );
}
