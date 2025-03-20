import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/font-size.css';

export const metadata: Metadata = {
    title: {
        default: 'SINKO',
        template: '%s | SINKO'
    },
    description: 'Descrição padrão do seu site',
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://seu-dominio.com'),
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        siteName: 'Seu Site',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Seu Site'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@seusite',
        creator: '@seusite'
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

const poppins = localFont({
    src: [
        {
            path: './fonts/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/Poppins-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/Poppins-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/Poppins-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ]
});

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='pt-br'>
            <body className={`${poppins.className} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class' enableSystem>
                    <Header />
                    <main className='min-h-screen'>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
