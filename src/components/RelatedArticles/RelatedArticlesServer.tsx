import { getRelatedArticles } from '@/cms/strapi/config';
import { Block } from '@/components/BlockRenderer/types';

import RelatedArticles from './index';

interface RelatedArticlesServerProps {
    slug: string;
}

export default async function RelatedArticlesServer({ slug }: RelatedArticlesServerProps) {
    const response = await getRelatedArticles(slug);

    if (!response.data[0].blocks?.length) {
        return null;
    }

    const relatedArticlesBlock = response.data[0].blocks.find(
        (block: Block) => block.__component === 'shared.related-article'
    );

    if (!relatedArticlesBlock?.articles?.length) {
        return null;
    }

    return <RelatedArticles articles={relatedArticlesBlock.articles} />;
}
