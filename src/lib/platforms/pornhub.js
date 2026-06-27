import axios from 'axios';

export const searchPornHub = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = query === 'trending' 
      ? `https://www.pornhub.com/videos/trending?page=${page}`
      : `https://www.pornhub.com/search?search=${encodeURIComponent(query)}&page=${page}`;

    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 15000,
    });

    const html = response.data;
    const videos = [];

    // Regex to find video elements
    const videoRegex = /href="(\/view_video\.php\?viewkey=([a-zA-Z0-9]+))"[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*alt="([^"]+)"[\s\S]*?<span class="duration">([^<]+)<\/span>/g;
    
    let match;
    let count = 0;
    
    while ((match = videoRegex.exec(html)) && count < 20) {
      const videoUrl = match[1];
      const videoId = match[2];
      const thumbnail = match[3];
      const title = match[4];
      const duration = match[5];

      if (videoId && title && thumbnail) {
        videos.push({
          id: `ph_${videoId}`,
          title: decodeHTMLEntities(title),
          thumbnail: thumbnail.includes('http') ? thumbnail : `https:${thumbnail}`,
          externalUrl: `https://www.pornhub.com${videoUrl}`,
          embedUrl: `https://www.pornhub.com/embed/${videoId}`,
          platform: 'Pornhub',
          views: 0,
          publishedAt: new Date().toISOString(),
          duration: parseDuration(duration),
        });
        count++;
      }
    }

    console.log(`Found ${videos.length} videos for query: ${query}`);
    return videos;
  } catch (error) {
    console.error('Pornhub scraping error:', error.message);
    return [];
  }
};

const decodeHTMLEntities = (text) => {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
  };
  return text.replace(/&[a-z]+;/g, (entity) => entities[entity] || entity);
};

const parseDuration = (durationStr) => {
  if (!durationStr) return 0;
  const parts = durationStr.trim().split(':').map(p => parseInt(p) || 0);
  let seconds = 0;
  if (parts.length === 3) seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  else if (parts.length === 2) seconds = parts[0] * 60 + parts[1];
  else seconds = parts[0];
  return seconds;
};

export const fetchVideos = async (query = 'trending', page = 1) => {
  try {
    const videos = await searchPornHub(query, page);
    
    if (!videos || videos.length === 0) {
      console.warn(`No videos found for query: ${query}`);
      return [];
    }

    return videos.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
