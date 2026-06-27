import axios from 'axios';
import * as cheerio from 'cheerio';

export const searchPornHub = async (query = 'trending', page = 1) => {
  try {
    // Construct search URL
    const searchUrl = query === 'trending' 
      ? `https://www.pornhub.com/videos/trending?page=${page}`
      : `https://www.pornhub.com/search?search=${encodeURIComponent(query)}&page=${page}`;

    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Referer': 'https://www.pornhub.com/',
      },
      timeout: 15000,
    });

    const $ = cheerio.load(response.data);
    const videos = [];

    // Extract videos from the page
    $('div.thumbs li').each((index, element) => {
      try {
        const videoLink = $(element).find('a.thumbnail').attr('href');
        const title = $(element).find('a.title').text().trim();
        const thumbnail = $(element).find('img').attr('src');
        const duration = $(element).find('.duration').text().trim();
        const views = $(element).find('.views').text().trim();

        if (videoLink && title && thumbnail) {
          // Extract video ID from URL
          const videoIdMatch = videoLink.match(/\/view_video\.php\?viewkey=([a-zA-Z0-9]+)/);
          const videoId = videoIdMatch ? videoIdMatch[1] : `ph_${index}`;

          videos.push({
            id: `ph_${videoId}`,
            title: title,
            thumbnail: thumbnail.replace(/https:\/\//, 'https://'),
            externalUrl: videoLink.startsWith('http') ? videoLink : `https://www.pornhub.com${videoLink}`,
            embedUrl: `https://www.pornhub.com/embed/${videoId}`,
            platform: 'Pornhub',
            views: parseViewCount(views),
            publishedAt: new Date().toISOString(),
            duration: parseDuration(duration),
          });
        }
      } catch (e) {
        console.error('Error parsing video:', e);
      }
    });

    console.log(`Found ${videos.length} videos for query: ${query}`);
    return videos;
  } catch (error) {
    console.error('Pornhub scraping error:', error.message);
    return [];
  }
};

const parseViewCount = (viewsStr) => {
  if (!viewsStr) return 0;
  const match = viewsStr.match(/[\d.]+/);
  if (!match) return 0;
  let num = parseFloat(match[0]);
  if (viewsStr.includes('K')) num *= 1000;
  if (viewsStr.includes('M')) num *= 1000000;
  if (viewsStr.includes('B')) num *= 1000000000;
  return Math.floor(num);
};

const parseDuration = (durationStr) => {
  if (!durationStr) return 0;
  const parts = durationStr.split(':').map(p => parseInt(p) || 0);
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
