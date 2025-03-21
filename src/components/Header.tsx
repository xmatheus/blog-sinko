'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Grid } from './Grid';
import { Menu, Search, X } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='bg-surface-light w-full border-b border-gray-200'>
            <Grid>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex-shrink-0'>
                        <Link href='/' className='text-xl font-bold'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='139'
                                height='50'
                                viewBox='0 0 139 50'
                                fill='none'>
                                <g clipPath='url(#clip0_1216_1629)'>
                                    <path d='M27.3806 17.4756L23 20.4481V36.0931H27.3806V17.4756Z' fill='#2E8896' />
                                    <path
                                        d='M18.7127 19.0895H14.0192C14.0192 19.0895 14.3321 16.2734 9.16924 16.2734C4.0064 16.2734 4.3193 18.7766 4.3193 18.7766C4.3193 18.7766 3.22415 21.5927 11.516 22.062C19.8078 22.5314 19.8078 29.8845 19.8078 29.8845C19.8078 29.8845 19.0256 37.0812 9.16924 36.4554C-0.6871 35.8296 -1 29.1023 -1 29.1023H4.00639C5.22601 31.2117 6.36758 31.8599 9.16924 32.0748C9.16924 32.0748 14.4453 32.2466 14.9579 29.8845C15.5293 27.2513 13.5498 26.1297 9.16924 26.1297C4.78865 26.1297 -0.217751 23.6718 -0.217751 19.0895C-0.217751 14.5072 4.16284 11.5799 10.8902 12.0492C17.6175 12.5186 18.7127 19.0895 18.7127 19.0895Z'
                                        fill='#2E8896'
                                    />
                                    <path
                                        d='M36.6322 12H31V36.0933H36.0064V19.666L46.645 36.0933H51.3385V12H46.645V27.645L36.6322 12Z'
                                        fill='#2E8896'
                                    />
                                    <path
                                        d='M59.8499 12.0492H55V36.1425H60.0064L59.8499 25.6604L69.0805 36.1425H75.6514L64.387 23.9394L75.6514 12.0492H69.5498L59.8499 22.5314V12.0492Z'
                                        fill='#2E8896'
                                    />
                                    <path
                                        d='M101.345 24.6724C101.345 31.6712 95.6712 37.3449 88.6724 37.3449C81.6736 37.3449 76 31.6712 76 24.6724C76 17.6736 81.6736 12 88.6724 12C95.6712 12 101.345 17.6736 101.345 24.6724ZM80.3109 24.6724C80.3109 29.2904 84.0545 33.034 88.6724 33.034C93.2904 33.034 97.034 29.2904 97.034 24.6724C97.034 20.0545 93.2904 16.3109 88.6724 16.3109C84.0545 16.3109 80.3109 20.0545 80.3109 24.6724Z'
                                        fill='#2E8896'
                                    />
                                    <path d='M23.0005 17.9451V12H27.3811V15.2854L23.0005 17.9451Z' fill='#2E8896' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_1216_1629'>
                                        <rect
                                            width='139'
                                            height='49.3226'
                                            fill='white'
                                            transform='translate(0 0.338709)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>

                    <nav className='hidden items-center gap-8 md:flex'>
                        <Link href='/' className='text-gray-600 hover:text-gray-900 dark:hover:text-gray-50'>
                            Home
                        </Link>
                        <Link href='/categorias' className='text-gray-600 hover:text-gray-900 dark:hover:text-gray-50'>
                            Categorias
                        </Link>
                        <Link href='/noticias' className='text-gray-600 hover:text-gray-900 dark:hover:text-gray-50'>
                            Notícias
                        </Link>
                    </nav>

                    <div className='hidden items-center gap-2 md:flex'>
                        <button
                            className='bg-primary flex cursor-pointer items-center rounded-full px-4 py-2 transition-colors hover:opacity-80'
                            aria-label='Buscar'>
                            <Search className='mr-2.5 h-5 w-5 text-white dark:text-gray-400' />
                            <span className='text-white dark:text-gray-400'>Buscar</span>
                        </button>
                    </div>

                    <div className='flex items-center gap-2 md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
                            aria-label='Menu principal'>
                            {isMenuOpen ? (
                                <X className='h-6 w-6 text-gray-600 dark:text-gray-400' />
                            ) : (
                                <Menu className='h-6 w-6 text-gray-600 dark:text-gray-400' />
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className='md:hidden'>
                        <nav className='flex flex-col space-y-4 py-4'>
                            <Link
                                href='/'
                                className='text-foreground px-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                                onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link
                                href='/categorias'
                                className='text-foreground px-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                                onClick={toggleMenu}>
                                Categorias
                            </Link>
                            <Link
                                href='/noticias'
                                className='text-foreground px-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                                onClick={toggleMenu}>
                                Notícias
                            </Link>
                            <button className='bg-primary flex items-center gap-2 px-2' aria-label='Buscar'>
                                <Search className='h-5 w-5' />
                                <span>Buscar</span>
                            </button>
                        </nav>
                    </div>
                )}
            </Grid>
        </header>
    );
}
