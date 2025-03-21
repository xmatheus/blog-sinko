import Image from 'next/image';
import Link from 'next/link';

import { NewArticle } from '@/cms/strapi/types';
import { getStrapiImageUrl } from '@/utils/get-strapi-image-url';

import { Tag } from '../Tag';

interface NewsCardProps {
    article: NewArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
        .format(new Date(article.publishedAt))
        .replace(',', ' às');

    return (
        <article
            className='relative mx-auto flex h-[533px] w-[342px] overflow-hidden rounded-[8px] xl:h-[465px] xl:w-[732px] xl:items-center xl:justify-center'
            itemScope
            itemType='https://schema.org/NewsArticle'>
            <Link
                href={`/postagens/${article.slug}`}
                className='group relative h-full w-full'
                title={article.title}
                aria-label={`Ler notícia: ${article.title}`}>
                <figure className='relative h-full w-full' itemType='https://schema.org/ImageObject'>
                    <Image
                        src={getStrapiImageUrl(article.bannerImage?.img?.url || '')}
                        alt={article.bannerImage?.alt || ''}
                        loading='lazy'
                        fill
                        sizes='(min-width: 1280px) 732px, 342px'
                        className='object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    <figcaption className='sr-only' itemProp='caption'>
                        {article.bannerImage?.alt}
                    </figcaption>
                </figure>

                <div
                    className='absolute inset-0'
                    role='presentation'
                    style={{
                        background: 'linear-gradient(0deg, #232323 0%, rgba(0, 0, 0, 0.00) 81.5%)'
                    }}
                    aria-hidden='true'></div>

                <footer className='p-xsmall bg-primary absolute bottom-0 left-0 flex w-[342px] flex-col gap-[12px] rounded-tr-[5px] p-6 text-white xl:w-[423px]'>
                    <Tag variant='tags' aria-label={`Categoria: ${article.category?.name}`}>
                        {article.category?.name}
                    </Tag>
                    <h2 className='line-clamp-3 text-base leading-[145%] font-normal tracking-[0.15px] xl:text-2xl'>
                        {article.title}
                    </h2>
                    <time className='text-lg xl:text-xl'>
                        por {article.author?.name} | {formattedDate}
                    </time>
                </footer>
            </Link>
        </article>
    );
};
