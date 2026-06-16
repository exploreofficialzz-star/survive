import { searchYouTube } from './youtube';
import { searchDailymotion } from './dailymotion';
import { CURATED_EMBEDS } from './embeds';

export const fetchVideos = async (query, page = 1) => {
  const [yt, dm] = await Promise.allSettled([
    searchYouTube(query, 16),
    searchDailymotion(query, page),
  ]);
  const ytVideos = yt.status === 'fulfilled' ? yt.value.videos : [];
  const dmVideos = dm.status === 'fulfilled' ? dm.value : [];
  const all = [...ytVideos, ...dmVideos, ...CURATED_EMBEDS];
  return all.sort(() => Math.random() - 0.5);
};
