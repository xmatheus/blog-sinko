import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/font-size.css';

export const metadata: Metadata = {
    title: 'Next.js 15 Starter',
    description: 'Next.js 15 Starter'
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
                <ThemeProvider attribute='class'>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
