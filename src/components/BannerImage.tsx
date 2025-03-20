import Image from 'next/image';

import { cn } from '@/lib/utils';
import { getStrapiURL } from '@/utils/get-strapi-url';

interface BannerImageProps {
    src?: string;
    alt?: string;
    className?: string;
}

export function BannerImage({ src, alt, className }: BannerImageProps) {
    if (!src) return null;

    return (
        <div className={cn('relative mb-[24px] aspect-video w-full max-w-[745px]', className)}>
            <Image
                src={`${getStrapiURL()}${src}`}
                alt={alt || ''}
                fill
                loading='eager'
                decoding='async'
                className='rounded-[8px] object-cover'
                sizes='(min-width: 1280px) 745px, calc(100vw - 32px)'
            />
        </div>
    );
}
