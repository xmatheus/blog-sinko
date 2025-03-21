import { NewArticle } from '@/cms/strapi/types';

import { Grid } from '../Grid';
import { Carousel } from './Carousel';

interface LastNewsClientProps {
    articles: NewArticle[];
}

export const LastNewsClient = ({ articles }: LastNewsClientProps) => {
    if (!articles.length) {
        return (
            <section className='w-full py-11' aria-label='Últimas notícias'>
                <Grid>
                    <div className='col-span-full py-8 text-center'>
                        <p className='text-muted-foreground'>Nenhuma notícia encontrada.</p>
                    </div>
                </Grid>
            </section>
        );
    }

    return (
        <section className='mb-8 w-full' aria-label='Últimas notícias'>
            <Grid>
                <header className='col-span-full mb-6'>
                    <h2 className='text-2xl'>Últimas Notícias</h2>
                </header>

                <div className='col-span-full'>
                    <Carousel articles={articles} />
                </div>
            </Grid>
        </section>
    );
};
