import { headers } from 'next/headers';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ChevronRight } from 'lucide-react';

export interface autoBreadcrumbsProps extends React.HTMLProps<HTMLElement> {
    customStyles?: string;
    published?: string;
    author?: string;
}

export interface LinkSettings {
    text: string;
    link: string;
}

const AutoBreadcrumbs: React.FC<autoBreadcrumbsProps> = async (props) => {
    const { customStyles, published, author } = props;
    const heads = await headers();
    const pathname = heads.get('x-pathname');

    let breadCrumbLink = '';
    const links = pathname?.split('/').map((i) => {
        if (/\s|\//.test(i) || i === '') {
            return {};
        }
        breadCrumbLink += `/${i}`;

        return {
            link: breadCrumbLink,
            text: i
        };
    }) as LinkSettings[];

    links.shift();

    const autoBreadcrumbsStyles = cn('flex flex-col', customStyles);

    return (
        <div>
            <div className={autoBreadcrumbsStyles}>
                {published && author && (
                    <p className={cn('mb-2 text-xs opacity-85')}>
                        <time itemProp='datePublished'>{published}</time> - por {author}
                    </p>
                )}

                <nav aria-label='breadcrumb' className='py-xxsmall flex self-start'>
                    <ol className='text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5'>
                        <li className='inline-flex items-center gap-1.5'>
                            <Link href='/' className='hover:text-foreground text-[#5E6772] transition-colors'>
                                <p className='base-typography-classes m-0 text-[0.875rem] leading-[140%] font-[400]'>
                                    Início
                                </p>
                            </Link>
                            <ChevronRight className='mx-2 h-4 w-4' aria-hidden='true' />
                        </li>
                        {links.map((link: LinkSettings, i: number) => (
                            <li key={i} className='inline-flex items-center gap-1.5'>
                                {links.length === i + 1 ? (
                                    <span
                                        role='link'
                                        aria-disabled='true'
                                        aria-current='page'
                                        className='font-normal text-[#076553]'>
                                        <p className='base-typography-classes m-0 text-[0.875rem] leading-[140%] font-[400]'>
                                            {link.text}
                                        </p>
                                    </span>
                                ) : (
                                    <>
                                        <Link
                                            href={link.link}
                                            className='hover:text-foreground text-[#5E6772] transition-colors'>
                                            <p className='base-typography-classes m-0 text-[0.875rem] leading-[140%] font-[400]'>
                                                {link.text}
                                            </p>
                                        </Link>
                                        <ChevronRight className='mx-2 h-4 w-4' aria-hidden='true' />
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default AutoBreadcrumbs;
