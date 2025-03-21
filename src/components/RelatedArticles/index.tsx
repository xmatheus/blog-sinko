import { Fragment } from 'react';

import { NewArticle } from '@/cms/strapi/types';
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

interface RelatedArticlesProps {
    articles: NewArticle[];
    title?: string;
}

export default function RelatedArticles({ articles, title = 'Artigos Relacionados' }: RelatedArticlesProps) {
    if (!articles.length) {
        return null;
    }

    return (
        <section className='w-full py-8' aria-label='Artigos relacionados'>
            <nav
                className='flex h-full flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between'
                aria-label='Lista de artigos relacionados'>
                {articles.map((article, index) => (
                    <Fragment key={article.id}>
                        <a
                            href={`/postagens/${article.slug}`}
                            title={article.title}
                            className='flex w-full max-w-[342px] flex-row items-center justify-between lg:max-w-[232px] lg:flex-col lg:justify-center'>
                            <div className='!lg:h-[140px] relative !h-[140px] w-[140px] rounded-[8px] lg:w-full lg:max-w-[232px]'>
                                <img
                                    src={getStrapiImageUrl(article.bannerImage?.img?.url || '')}
                                    alt={article.title}
                                    className='!h-[140px] w-full rounded-[8px] object-cover'
                                />
                            </div>
                            <div className='flex h-full w-fit flex-col gap-[12px] lg:gap-[20px]'>
                                <h3 className='!my-0 line-clamp-4 !w-fit max-w-[180px] !text-[18px] leading-[24px] font-[600] lg:!my-[12px] lg:line-clamp-3 lg:max-w-[232px]'>
                                    {article.title}
                                </h3>
                                <span className='text-[14px]'>
                                    {new Date(article.publishedAt).toLocaleDateString('pt-BR')} às{' '}
                                    {new Date(article.publishedAt).toLocaleTimeString('pt-BR', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </a>
                        {index < articles.length - 1 && (
                            <div
                                className='bg-muted hidden h-auto w-[1px] lg:block'
                                role='separator'
                                aria-hidden='true'
                            />
                        )}
                    </Fragment>
                ))}
            </nav>
        </section>
    );
}
