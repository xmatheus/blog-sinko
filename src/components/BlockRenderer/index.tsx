import { RichText } from '@/components/RichText';

import { BannerImage } from '../BannerImage';
import RelatedArticles from '../RelatedArticles';
import RelatedArticlesServer from '../RelatedArticles/RelatedArticlesServer';
import { Block } from './types';

interface BlockRendererProps {
    blocks: Block[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
    return (
        <div className='flex flex-col'>
            {blocks.map((block) => {
                switch (block.__component) {
                    case 'shared.rich-text':
                        return <RichText content={block.body || ''} id={block.id} key={block.id} />;
                    case 'shared.banner':
                        return <BannerImage src={block.img.url} alt={block.img.alt} key={block.id} className='mt-8' />;
                    case 'shared.related-article':
                        return (
                            <RelatedArticlesServer
                                slug={'como-acessar-e-recuperar-a-senha-do-portal-do-consignado'}
                                key={block.id}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
