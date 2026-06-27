import axios from 'axios';

export const searchPornHub = async (query = 'trending', page = 1) => {
  try {
    const response = await axios.get('https://www.pornhub.com/webmaster/search/v3', {
      params: {
        search: query,
        page: page,
        thumbsize: 'medium',
        output: 'json',
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
      timeout: 10000,
    });

    if (!response.data || !response.data.videos || response.data.videos.length === 0) {
      return [];
    }

    return response.data.videos.map(video => ({
      id: `ph_${video.video_id}`,
      title: video.title || 'Untitled Video',
      thumbnail: video.thumb || '',
      externalUrl: video.url || '',
      platform: 'Pornhub',
      views: parseInt(video.views) || 0,
      publishedAt: video.publish_date || new Date().toISOString(),
      duration: parseInt(video.duration) || 0,
    })).filter(v => v.thumbnail && v.externalUrl);
  } catch (error) {
    console.error('Pornhub API error:', error.message);
    return [];
  }
};

export const fetchVideos = async (query = 'trending', page = 1) => {
  try {
    const videos = await searchPornHub(query, page);
    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
