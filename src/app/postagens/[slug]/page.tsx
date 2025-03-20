import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPageBySlug } from '@/cms/strapi/config';
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
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { data } = await getPageBySlug(resolvedParams.slug);

    if (data.length === 0) {
        return {
            title: 'Post não encontrado',
            description: 'O post que você está procurando não foi encontrado.'
        };
    }

    const post = data[0];
    const imageUrl = post.bannerImage?.img?.url
        ? `${getStrapiImageUrl(post.bannerImage.img.url)}`
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
    const resolvedParams = await params;
    const { post } = await loader(resolvedParams.slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description || post.title,
        image: post.bannerImage?.img?.url ? `${getStrapiImageUrl(post.bannerImage.img.url)}` : '',
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
            '@type': 'Organization',
            name: post.author?.name
        }
    };

    const currentUrl = `${process.env.NEXT_PUBLIC_URL}/postagens/${resolvedParams.slug}`;

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
                        <BlockRenderer blocks={post.blocks || []} slug={resolvedParams.slug} />
                    </div>
                    <ArticleTags post={post} />
                </article>
            </Grid>
        </>
    );
}
