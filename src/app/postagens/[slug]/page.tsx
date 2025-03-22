import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPageBySlug, getRelatedArticles } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';
import { ArticleTags } from '@/components/ArticleTags';
import AutoBreadcrumbs from '@/components/Auto-breadcrumbs';
import { BannerImage } from '@/components/BannerImage';
import { BlockRenderer } from '@/components/BlockRenderer';
import { FontSizeControl } from '@/components/FontSizeControl';
import { Grid } from '@/components/Grid';
import { PostHeader } from '@/components/PostHeader';
import { ArticleStructuredData } from '@/components/SEO/MetaTags';
import { SidebarContent } from '@/components/SidebarContent';
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
    const imageUrl = `/api/og?title=${post.title}`;

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
    const [postResponse] = await Promise.all([getPageBySlug(slug)]);

    if (postResponse.data.length === 0) notFound();

    return {
        post: postResponse.data[0]
    };
}

export default async function DynamicPageRoute({ params }: PageProps) {
    const resolvedParams = await params;
    const { post } = await loader(resolvedParams.slug);

    const currentUrl = `${process.env.NEXT_PUBLIC_URL}/postagens/${resolvedParams.slug}`;

    return (
        <>
            <ArticleStructuredData
                article={{
                    title: post.title,
                    ogImage: `/api/og?title=${post.title}`,
                    publishedTime: post.articlePublishedAt,
                    modifiedTime: post.updatedAt,
                    authors: [post.author?.name || ''],
                    tags: post.tags?.map((tag) => tag.title) || []
                }}
            />
            <Grid>
                <div className='flex w-full flex-wrap justify-between'>
                    <main>
                        <article className='flex w-full flex-col gap-8 lg:max-w-[745px]'>
                            <AutoBreadcrumbs title={post.title} />
                            <PostHeader post={post} />
                            <BannerImage src={post.bannerImage?.img?.url} alt={post.bannerImage?.alt} />
                            <FontSizeControl title={post.title} url={currentUrl} />
                            <TableOfContents content={post.blocks || []} />
                            <div className='article-content'>
                                <BlockRenderer blocks={post.blocks || []} slug={resolvedParams.slug} />
                            </div>
                            <ArticleTags post={post} />
                        </article>
                    </main>
                    <SidebarContent title={post.title} url={currentUrl} slug={resolvedParams.slug} />
                </div>
            </Grid>
        </>
    );
}
