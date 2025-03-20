import Link from 'next/link';

import { getTrendingsTag } from '@/cms/strapi/config';
import { Tag } from '@/components/Tag';

import { Grid } from '../Grid';

export async function TrendingTags() {
    const tags = await getTrendingsTag();

    return (
        <Grid className='mt-24 mb-14 flex flex-col items-center gap-8'>
            <h2 className='text-center text-2xl'>Assuntos mais acessados</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {tags.map((tag) => (
                    <Link key={tag.id} href={`/postagens/${tag.slug}`}>
                        <Tag variant='trendingTags'>{tag.title}</Tag>
                    </Link>
                ))}
            </div>
        </Grid>
    );
}
