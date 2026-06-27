import { searchPornHub } from './pornhub';

export const fetchVideos = async (query = 'trending', page = 1) => {
  try {
    const videos = await searchPornHub(query, page);
    
    if (!videos || videos.length === 0) {
      console.warn(`No videos found for query: ${query}`);
      return [];
    }

    // Shuffle results
    return videos.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
