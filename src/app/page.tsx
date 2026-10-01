import PortfolioHome from '@/components/portfolio-home';
import { formatYouTubeStats, getYouTubeVideoStats } from '@/app/youtube';

const shinobiFeaturedVideoId = 'bPsGUDkz6-0';

export const revalidate = 3600;

export default async function Home() {
  const statsById = await getYouTubeVideoStats([shinobiFeaturedVideoId]);
  const shinobiVideoStatsText = formatYouTubeStats(statsById.get(shinobiFeaturedVideoId));

  return <PortfolioHome shinobiVideoStatsText={shinobiVideoStatsText} />;
}
