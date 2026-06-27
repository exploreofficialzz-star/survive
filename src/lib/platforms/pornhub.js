import videosData from '../videos.json';

export const searchPornHub = async (query = 'trending', page = 1) => {
  try {
    // Get videos from JSON storage
    let videos = videosData.videos || [];

    if (query !== 'trending') {
      // Search in title
      videos = videos.filter(v => 
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.platform.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Add publishedAt if missing
    videos = videos.map(v => ({
      ...v,
      publishedAt: v.publishedAt || new Date().toISOString(),
    }));

    console.log(`Found ${videos.length} videos for query: ${query}`);
    return videos;
  } catch (error) {
    console.error('Error loading videos:', error.message);
    return [];
  }
};

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
