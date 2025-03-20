import { Fragment } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { getMostRead } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

import { Grid } from '../Grid';
import { Tag } from '../Tag';

const MainArticleCard = ({ article }: { article: NewArticle }) => {
    return (
        <article>
            <Link
                href={`/postagens/${article.slug}`}
                key={article.id}
                className='group relative mb-8 block h-[465px] w-full overflow-hidden rounded-lg transition-all'
                aria-label={`Ler artigo: ${article.title}`}>
                {article.bannerImage && (
                    <figure className='relative h-full w-full'>
                        <Image
                            src={getStrapiImageUrl(article.bannerImage.img.url)}
                            alt={article.bannerImage.alt}
                            loading='eager'
                            fill
                            className='object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                        <figcaption className='sr-only'>{article.bannerImage?.alt || ''}</figcaption>
                    </figure>
                )}
                <div
                    className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70'
                    aria-hidden='true'></div>

                <div className='absolute bottom-0 left-0 z-10 max-w-3xl gap-[12px] p-6 px-[24px] py-[45px] lg:bottom-[45px] lg:left-[64px] lg:p-0'>
                    <Tag variant='tags'>{article.tags?.[0]?.title}</Tag>
                    <h2 className='mt-3 mb-2 text-2xl font-semibold tracking-tight text-white'>{article.title}</h2>
                    <p className='line-clamp-2 text-white/80'>{article.description}</p>
                </div>
            </Link>
        </article>
    );
};

const SmallArticleCard = ({ article }: { article: NewArticle }) => {
    const formattedDate = new Date(article.updatedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <article>
            <Link
                href={`/postagens/${article.slug}`}
                key={article.id}
                className='group flex max-w-[272px] flex-col overflow-hidden rounded-lg transition-all'
                aria-label={`Ler artigo: ${article.title}`}>
                <figure className='relative h-[150px] w-full overflow-hidden'>
                    {article.bannerImage && (
                        <Image
                            src={getStrapiImageUrl(article.bannerImage.img.url)}
                            alt={article.bannerImage.alt}
                            loading='eager'
                            fill
                            className='object-cover transition-transform duration-300 group-hover:scale-110'
                        />
                    )}
                    <figcaption className='sr-only'>{article.bannerImage?.alt}</figcaption>
                </figure>
                <div className='flex flex-col gap-2 py-3'>
                    <Tag variant='tags'>{article.tags?.[0]?.title}</Tag>
                    <h3 className='text-card-foreground text-lg leading-6 font-bold'>{article.title}</h3>
                    <time dateTime={article.updatedAt} className='text-muted-foreground text-xs'>
                        {formattedDate}
                    </time>
                </div>
            </Link>
        </article>
    );
};

export { SmallArticleCard };

export default async function MostRead() {
    const mostReadArticles = await getMostRead();

    if (!mostReadArticles.new_articles.length) {
        return (
            <section className='w-full py-11' aria-label='Artigos mais lidos'>
                <Grid>
                    <div className='col-span-full py-8 text-center'>
                        <p className='text-muted-foreground'>Nenhum artigo mais lido encontrado.</p>
                    </div>
                </Grid>
            </section>
        );
    }

    const [mainArticle, ...smallArticles] = mostReadArticles.new_articles;

    return (
        <section className='w-full py-11' aria-label='Artigos mais lidos'>
            <Grid>
                <header className='col-span-full mb-6'>
                    <h2 className='text-2xl'>{mostReadArticles.title}</h2>
                </header>

                <div className='col-span-full'>
                    <MainArticleCard article={mainArticle} />
                </div>

                <nav
                    className='flex h-full flex-wrap justify-center gap-4 md:justify-between'
                    aria-label='Lista de artigos mais lidos'>
                    {smallArticles.map((article, index) => (
                        <Fragment key={article.id}>
                            <SmallArticleCard article={article} />
                            {index < smallArticles.length - 1 && (
                                <div
                                    className='bg-muted hidden h-auto w-[1px] lg:block'
                                    role='separator'
                                    aria-hidden='true'
                                />
                            )}
                        </Fragment>
                    ))}
                </nav>
            </Grid>
        </section>
    );
}
