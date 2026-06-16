import axios from 'axios';
const BASE = 'https://api.dailymotion.com';

export const searchDailymotion = async (query, page = 1) => {
  try {
    const res = await axios.get(`${BASE}/videos`, {
      params: {
        search: query, fields: 'id,title,thumbnail_240_url,views_total,duration,created_time',
        limit: 20, page, family_filter: false
      }
    });
    return res.data.list.map(v => ({
      id: `dm_${v.id}`,
      title: v.title,
      thumbnail: v.thumbnail_240_url,
      embedUrl: `https://www.dailymotion.com/embed/video/${v.id}?autoplay=1`,
      platform: 'Dailymotion',
      views: v.views_total || 0,
      duration: v.duration || 0,
      publishedAt: new Date(v.created_time * 1000).toISOString(),
    }));
  } catch { return []; }
};
