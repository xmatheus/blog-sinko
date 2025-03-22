import Script from 'next/script';

interface BlogPostingSchemaProps {
    article: {
        title: string;
        description: string;
        ogImage?: string;
        publishedTime: string;
        modifiedTime: string;
        authors: string[];
        tags: string[];
        url: string;
    };
}

export const BlogPostingSchema = ({ article }: BlogPostingSchemaProps) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        image: article.ogImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime,
        author: article.authors.map((author) => ({
            '@type': 'Person',
            name: author
        })),
        keywords: article.tags.join(', '),
        url: article.url,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url
        }
    };

    return (
        <Script
            id='blog-posting-schema'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};
