import { Metadata } from 'next';
import Script from 'next/script';

interface MetaTagsProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    article?: {
        title: string;
        ogImage?: string;
        publishedTime: string;
        modifiedTime: string;
        authors: string[];
        tags: string[];
    };
}

export const generateMetadata = ({ title, description, canonical, ogImage, article }: MetaTagsProps): Metadata => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seu-dominio.com';
    const defaultImage = `${siteUrl}/og-image.jpg`;

    return {
        title,
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: canonical || siteUrl
        },
        openGraph: {
            title,
            description,
            url: canonical || siteUrl,
            siteName: 'Seu Site',
            images: [
                {
                    url: ogImage || defaultImage,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ],
            type: article ? 'article' : 'website',
            ...(article && {
                publishedTime: article.publishedTime,
                modifiedTime: article.modifiedTime,
                authors: article.authors,
                tags: article.tags
            })
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage || defaultImage]
        }
    };
};

export const ArticleStructuredData = ({ article }: { article: MetaTagsProps['article'] }) => {
    if (!article) return null;

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        image: article.ogImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime,
        author: article.authors.map((author) => ({
            '@type': 'Person',
            name: author
        })),
        keywords: article.tags.join(', ')
    };

    return (
        <Script
            id='article-structured-data'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};
