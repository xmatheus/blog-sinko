import { NewArticle } from '@/cms/strapi/types';

import { Tag } from './Tag';

interface ArticleTagsProps {
    post: NewArticle;
}

export function ArticleTags({ post }: ArticleTagsProps) {
    if (!post.tags || post.tags.length === 0) return null;

    return (
        <div className='flex w-full flex-col gap-8'>
            <p className='base-typography-classes m-0 text-[1.5rem] leading-[130%] font-[400] xl:text-[2rem]'>Tags</p>
            <ul className='flex flex-wrap gap-6'>
                {post.tags.map((tag) => (
                    <li key={tag.id}>
                        <Tag variant='article' title={`Navegue por ${tag.title}`} href={`/tudo-sobre/${tag.slug}`}>
                            {tag.title}
                        </Tag>
                    </li>
                ))}
            </ul>
        </div>
    );
}
