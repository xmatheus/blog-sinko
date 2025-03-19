import { getLastNews } from '@/cms/strapi/config';
import { NewArticle } from '@/cms/strapi/types';

import { LastNewsClient } from './LastNewsClient';

export default async function LastNews() {
    const { data: articles } = await getLastNews();

    return <LastNewsClient articles={articles} />;
}
