import { Metadata } from 'next';

export const siteConfig = {
    name: 'SINKO',
    description: 'Blog sobre tudo',
    url: process.env.NEXT_PUBLIC_URL || 'https://seu-dominio.com',
    ogImage: `${process.env.NEXT_PUBLIC_URL}/api/og?title=Blog com as últimas notícias e artigos`,
    twitterHandle: '@seusite',
    author: {
        name: 'Sinko',
        twitter: '@sinko',
        email: 'sinko@sinko.com'
    },
    organization: {
        name: 'SINKO',
        url: process.env.NEXT_PUBLIC_URL || 'https://seu-dominio.com',
        logo: '/logo.png',
        sameAs: ['https://twitter.com/seusite', 'https://github.com/seusite', 'https://linkedin.com/in/seusite']
    }
};

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.organization.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
        site: siteConfig.twitterHandle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: siteConfig.url
    }
};
