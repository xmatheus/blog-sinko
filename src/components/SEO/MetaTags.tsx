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
