import { 
  searchPornHub, 
  searchXVideos, 
  searchRedtube, 
  searchYouporn, 
  searchSpankbang,
  searchClippit,
  searchExtrathumbs,
  searchTubepornclassic
} from './pornhub';

export const fetchVideos = async (query, page = 1) => {
  try {
    const results = await Promise.allSettled([
      searchPornHub(query, page),
      searchXVideos(query, page),
      searchRedtube(query, page),
      searchYouporn(query, page),
      searchSpankbang(query, page),
      searchClippit(query, page),
      searchExtrathumbs(query, page),
      searchTubepornclassic(query, page),
    ]);

    const allVideos = results
      .filter(r => r.status === 'fulfilled')
      .flatMap(r => r.value)
      .filter(v => v && v.id);

    // Shuffle results for variety
    return allVideos.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
