import axios from 'axios';
const KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE = 'https://www.googleapis.com/youtube/v3';

export const searchYouTube = async (query, max = 20, pageToken = '') => {
  try {
    const search = await axios.get(`${BASE}/search`, {
      params: { q: query, part: 'snippet', type: 'video', key: KEY, maxResults: max, pageToken }
    });
    const ids = search.data.items.map(i => i.id.videoId).join(',');
    const detail = await axios.get(`${BASE}/videos`, {
      params: { id: ids, part: 'snippet,statistics,contentDetails', key: KEY }
    });
    return {
      videos: detail.data.items.map(item => ({
        id: `yt_${item.id}`,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        embedUrl: `https://www.youtube.com/embed/${item.id}?autoplay=1`,
        platform: 'YouTube',
        views: parseInt(item.statistics.viewCount) || 0,
        publishedAt: item.snippet.publishedAt,
      })),
      nextPage: search.data.nextPageToken || null,
    };
  } catch { return { videos: [], nextPage: null }; }
};
