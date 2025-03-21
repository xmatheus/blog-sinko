import Link from 'next/link';

import { getTrendingsTag } from '@/cms/strapi/config';
import { Tag } from '@/components/Tag';
import { cn } from '@/lib/utils';

import { Grid } from '../Grid';

export async function TrendingTags({ className, align }: { className?: string; align?: 'center' | 'left' }) {
    const tags = await getTrendingsTag();

    return (
        <Grid className={cn('mt-24 mb-14 flex flex-col gap-8', align === 'left' && 'items-start', className)}>
            <h2 className={cn('text-center text-2xl', align === 'left' && 'text-left')}>Assuntos mais acessados</h2>
            <div
                className={cn('flex flex-wrap items-center justify-center gap-4', align === 'left' && 'justify-start')}>
                {tags.map((tag) => (
                    <Link key={tag.id} href={`/postagens/${tag.slug}`}>
                        <Tag variant='trendingTags'>{tag.title}</Tag>
                    </Link>
                ))}
            </div>
        </Grid>
    );
}
