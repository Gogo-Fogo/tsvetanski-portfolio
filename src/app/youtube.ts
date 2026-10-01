export type YouTubeVideoStats = {
  viewCount?: string;
  likeCount?: string;
  title?: string;
};

type YouTubeVideosResponse = {
  items?: Array<{
    id?: string;
    statistics?: {
      viewCount?: string;
      likeCount?: string;
    };
    snippet?: {
      title?: string;
    };
  }>;
};

const numberFormatter = new Intl.NumberFormat('en-US');

export const getYouTubeVideoId = (embedUrl: string) =>
  embedUrl.split('/embed/')[1]?.split('?')[0] ?? '';

export const getYouTubeThumbnailUrl = (embedUrl: string) => {
  const videoId = getYouTubeVideoId(embedUrl);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

export const formatYouTubeStats = (stats?: YouTubeVideoStats) => {
  const parts: string[] = [];

  const viewCount = Number(stats?.viewCount);
  if (Number.isFinite(viewCount)) {
    parts.push(`${numberFormatter.format(viewCount)} views`);
  }

  const likeCount = Number(stats?.likeCount);
  if (Number.isFinite(likeCount)) {
    parts.push(`${numberFormatter.format(likeCount)} likes`);
  }

  return parts.length > 0 ? parts.join(' · ') : null;
};

export async function getYouTubeVideoStats(videoIds: string[]) {
  const statsById = new Map<string, YouTubeVideoStats>();
  const uniqueVideoIds = Array.from(new Set(videoIds.filter(Boolean)));
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey || uniqueVideoIds.length === 0) {
    if (!apiKey && uniqueVideoIds.length > 0) {
      console.warn('[YouTube] YOUTUBE_API_KEY is missing; live video statistics are unavailable.');
    }
    return statsById;
  }

  try {
    for (let index = 0; index < uniqueVideoIds.length; index += 50) {
      const videoIdBatch = uniqueVideoIds.slice(index, index + 50);
      const searchParams = new URLSearchParams({
        part: 'statistics,snippet',
        id: videoIdBatch.join(','),
        key: apiKey,
      });
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?${searchParams.toString()}`,
        { next: { revalidate: 3600 } }
      );

      if (!response.ok) {
        throw new Error(`YouTube Data API returned ${response.status}.`);
      }

      const data = (await response.json()) as YouTubeVideosResponse;
      data.items?.forEach((item) => {
        if (item.id) {
          statsById.set(item.id, {
            ...item.statistics,
            title: item.snippet?.title,
          });
        }
      });
    }
  } catch (error) {
    console.warn('[YouTube] Live video statistics request failed.', error);
  }

  return statsById;
}
