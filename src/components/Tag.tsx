import { ReactNode } from 'react';

type TagVariant = 'default' | 'trending' | 'tags' | 'trendingTags' | 'article';

interface TagProps {
    variant?: TagVariant;
    children?: ReactNode;
    href?: string;
    title?: string;
}

const tagStyles = {
    default: 'bg-[#F5F6FA] px-8 py-2 text-[20px] font-normal text-[#5E6772]',
    trending:
        'inline-flex items-center gap-1 rounded-[4px] bg-[#FFF3E0] px-4 py-2 text-[12px] font-normal text-[#FE6D01]',
    tags: 'bg-sidebar-accent text-primary block w-fit rounded-[4px] px-4 py-2 text-[12px] font-normal',
    trendingTags: 'bg-[#F5F6FA] text-primary hover:bg-[#F5F6FA]/80 px-4 py-2 rounded-[4px]',
    article:
        'bg-accent text-secondary hover:bg-secondary/80 flex w-fit items-center justify-center rounded-[4px] px-[12px] py-[8px] transition-colors'
};

const TrendingIcon = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
        <path
            d='M7.14038 1.05489C7.08003 1.01896 7.0111 1 6.94087 1C6.87064 1 6.80171 1.01896 6.74137 1.05489C6.69149 1.09441 6.65784 1.15084 6.64678 1.2135C6.63572 1.27616 6.64803 1.3407 6.68136 1.3949C7.90841 3.51797 8.16741 6.41107 6.49136 8.00613C5.84699 7.46459 5.33551 6.78239 4.99631 6.01206C4.37674 6.35614 3.86324 6.86333 3.51153 7.4786C3.15982 8.09387 2.98334 8.79371 3.00124 9.50218C3.02687 10.1267 3.17709 10.7399 3.44306 11.3055C3.70903 11.8712 4.08539 12.378 4.55002 12.7961C5.01464 13.2142 5.55817 13.5353 6.14864 13.7404C6.73911 13.9455 7.36462 14.0304 7.98841 13.9903C11.1995 13.9903 12.8656 11.9963 12.9746 9.50218C13.1046 6.51008 10.9805 2.82995 7.14038 1.05489Z'
            stroke='#FE6D01'
            strokeWidth='1.77784'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export function Tag({ variant = 'default', children, href, title }: TagProps) {
    const tagContent = variant === 'trending' ? 'em alta' : children;

    if (variant === 'article' && href) {
        return (
            <a href={href} title={title} rel='tag' className={tagStyles[variant]}>
                {tagContent}
            </a>
        );
    }

    return (
        <div className={tagStyles[variant]}>
            {variant === 'trending' && <TrendingIcon />}
            {tagContent}
        </div>
    );
}
