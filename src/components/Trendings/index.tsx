import Image from 'next/image';
import Link from 'next/link';

import { getTrendings } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

import { Grid } from '../Grid';
import { Tag } from '../Tag';

const TrendingArticleCard = ({ article }: { article: NewArticle }) => {
    return (
        <article className='flex h-full'>
            <Link
                href={`/postagens/${article.slug}`}
                className='group flex overflow-hidden rounded-lg transition-all'
                aria-label={`Ler artigo em alta: ${article.title}`}>
                <figure className='relative min-h-[154px] w-[100px] flex-shrink-0 overflow-hidden'>
                    {article.bannerImage && (
                        <Image
                            src={getStrapiImageUrl(article.bannerImage.img.url)}
                            alt={article.bannerImage.alt}
                            loading='eager'
                            fill
                            className='object-cover pr-[12.5px] transition-transform duration-300 group-hover:scale-110'
                        />
                    )}
                    <figcaption className='sr-only'>{article.bannerImage?.alt || ''}</figcaption>
                </figure>
                <div className='flex flex-col justify-between'>
                    <div>
                        <Tag variant='trending' />
                        <h2 className='text-card-foreground mt-3 mb-2 max-w-[182.5px] min-w-[182.5px] text-base'>
                            {article.title}
                        </h2>
                    </div>
                    <div className='flex items-center justify-between' aria-hidden='true'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                            <path d='M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z' fill='#2E8896' />
                        </svg>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default async function Trendings() {
    const trendingArticles = await getTrendings();

    return (
        <section className='bg-accent dark:bg-card w-full py-11' aria-label='Artigos em alta'>
            <Grid>
                {trendingArticles.length > 0 ? (
                    <nav
                        className='flex w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                        aria-label='Lista de artigos em alta'>
                        <div className='flex w-full justify-between gap-3'>
                            {trendingArticles.map((article) => (
                                <TrendingArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </nav>
                ) : (
                    <div className='col-span-full py-8 text-center'>
                        <p className='text-accent-foreground/70'>Nenhum artigo em destaque encontrado.</p>
                    </div>
                )}
            </Grid>
        </section>
    );
}
