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
        </main>
    );
}
