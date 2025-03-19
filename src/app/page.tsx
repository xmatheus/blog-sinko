import { Grid } from '@/components/Grid';
import LastNews from '@/components/LastNews';
import MostRead from '@/components/MostRead';
import { TrendingTags } from '@/components/TrendingTags';
import Trendings from '@/components/Trendings';

export default function Home() {
    return (
        <main>
            <Trendings />

            <MostRead />

            <LastNews />

            <TrendingTags />

            <Grid className='py-12'>
                <div className='border-border bg-card rounded-lg border p-6'>
                    <h2 className='mb-4 text-2xl font-semibold'>Sobre este projeto</h2>
                    <p className='text-card-foreground/90'>
                        Este é um exemplo de blog utilizando Next.js 15 com Server-Side Generation (SSG) e Incremental
                        Static Regeneration (ISR) para consumo de dados do Strapi CMS.
                    </p>
                </div>
            </Grid>
        </main>
    );
}
