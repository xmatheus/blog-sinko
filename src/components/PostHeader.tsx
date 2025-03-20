import Link from 'next/link';

import { NewArticle } from '@/cms/strapi/types';

interface PostHeaderProps {
    post: NewArticle;
}

export function PostHeader({ post }: PostHeaderProps) {
    const calculateTotalWords = () => {
        let totalWords = 0;

        if (post.content) {
            totalWords += post.content.split(' ').length;
        }

        if (post.blocks) {
            post.blocks.forEach((block) => {
                if (block.__component === 'shared.rich-text' && block.body) {
                    totalWords += block.body.split(' ').length;
                }
            });
        }

        return totalWords;
    };

    const readingTime = Math.ceil(calculateTotalWords() / 200) || 0; // Estimativa de 200 palavras por minuto

    return (
        <header className='mb-[28px] flex w-full max-w-[745px] flex-col gap-6 self-start'>
            <div className='flex flex-wrap items-center gap-[12px]'>
                {post.category && (
                    <Link
                        href={`/categorias/${post.category.slug}`}
                        className='flex w-fit items-center gap-[4px] rounded-[4px] bg-[#DFF2EF] px-[8px] py-[4px]'>
                        <p className='m-0 text-[0.875rem] leading-[140%] font-[400] text-[#076553]'>
                            {post.category.name}
                        </p>
                    </Link>
                )}
            </div>

            <h1 className='m-0 text-[24px] leading-[130%] font-bold tracking-[0.25px] xl:text-[2.5rem]'>
                {post.title}
            </h1>

            <p className='m-0 text-[1rem] leading-[140%] font-[400] text-[#5E6772]'>{post.description}</p>

            <div className='flex flex-wrap items-center gap-[12px]'>
                <p className='m-0 text-[0.875rem] leading-[140%] font-[400]'>
                    Publicado em {new Date(post.publishedAt).toLocaleDateString('pt-BR')} às{' '}
                    {new Date(post.publishedAt).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>

                <span className='m-0 hidden text-[0.875rem] leading-[140%] font-[400] text-[#BDBDBD] lg:flex'>-</span>

                <p className='m-0 text-[0.875rem] leading-[140%] font-[400]'>Tempo de leitura: {readingTime} min</p>

                <span className='m-0 hidden text-[0.875rem] leading-[140%] font-[400] text-[#BDBDBD] lg:flex'>-</span>

                <p className='m-0 text-[0.875rem] leading-[140%] font-[400]'>
                    Atualizado em {new Date(post.updatedAt).toLocaleDateString('pt-BR')} às{' '}
                    {new Date(post.updatedAt).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>

                {post.author && (
                    <p className='m-0 flex items-center text-[0.875rem] leading-[140%] font-[400] whitespace-pre-wrap'>
                        Por{' '}
                        <Link href={`/autores/${post.author.slug}`} className='underline'>
                            {post.author.name}
                        </Link>
                    </p>
                )}
            </div>
        </header>
    );
}
