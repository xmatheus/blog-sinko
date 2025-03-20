import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Blog',
        default: 'Blog'
    },
    description: 'Blog com as últimas notícias e artigos',
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://seu-dominio.com',
        siteName: 'Blog',
        images: [
            {
                url: 'https://seu-dominio.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Blog'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog',
        description: 'Blog com as últimas notícias e artigos',
        images: ['https://seu-dominio.com/og-image.jpg']
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
    }
};

export default function PostagensLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${inter.className} min-h-screen bg-white`}>
            <main className='container mx-auto px-0 py-8 md:px-4'>{children}</main>
        </div>
    );
}
