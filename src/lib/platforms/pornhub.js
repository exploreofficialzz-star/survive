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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 8000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return [];

    return response.data.videos.map(video => ({
      id: `ph_${video.video_id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'Pornhub',
      views: parseInt(video.views) || 0,
      publishedAt: video.publish_date || new Date().toISOString(),
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Pornhub search error:', error);
    return [];
  }
};

export const searchXVideos = async (query = 'trending', page = 1) => {
  try {
    // XVideos doesn't have public API, use search URL pattern
    const searchUrl = `https://www.xvideos.com/?k=${encodeURIComponent(query)}&p=${page}`;
    return [{
      id: 'xv_redirect',
      title: `Search "${query}" on XVideos`,
      thumbnail: 'https://picsum.photos/320/180?random=xvideos',
      externalUrl: searchUrl,
      platform: 'XVideos',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('XVideos search error:', error);
    return [];
  }
};

export const searchRedtube = async (query = 'trending', page = 1) => {
  try {
    const response = await axios.get('https://www.redtube.com/api/videos', {
      params: {
        search: query,
        page: page,
        thumbsize: 'medium',
        output: 'json',
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 8000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return [];

    return response.data.videos.map(video => ({
      id: `rt_${video.video_id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'Redtube',
      views: parseInt(video.views) || 0,
      publishedAt: video.created || new Date().toISOString(),
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Redtube search error:', error);
    return [];
  }
};

export const searchYouporn = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = `https://www.youporn.com/search/?query=${encodeURIComponent(query)}&page=${page}`;
    return [{
      id: 'yp_redirect',
      title: `Search "${query}" on YouPorn`,
      thumbnail: 'https://picsum.photos/320/180?random=youporn',
      externalUrl: searchUrl,
      platform: 'YouPorn',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('YouPorn search error:', error);
    return [];
  }
};

export const searchSpankbang = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = `https://spankbang.com/search?q=${encodeURIComponent(query)}&p=${page}`;
    return [{
      id: 'sb_redirect',
      title: `Search "${query}" on SpankBang`,
      thumbnail: 'https://picsum.photos/320/180?random=spankbang',
      externalUrl: searchUrl,
      platform: 'SpankBang',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('SpankBang search error:', error);
    return [];
  }
};

export const searchClippit = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = `https://clippit.tv/search/?q=${encodeURIComponent(query)}&page=${page}`;
    return [{
      id: 'cp_redirect',
      title: `Search "${query}" on Clippit`,
      thumbnail: 'https://picsum.photos/320/180?random=clippit',
      externalUrl: searchUrl,
      platform: 'Clippit',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('Clippit search error:', error);
    return [];
  }
};

export const searchExtrathumbs = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = `https://www.extrathumbs.com/search/?q=${encodeURIComponent(query)}&page=${page}`;
    return [{
      id: 'et_redirect',
      title: `Search "${query}" on Extrathumbs`,
      thumbnail: 'https://picsum.photos/320/180?random=extrathumbs',
      externalUrl: searchUrl,
      platform: 'Extrathumbs',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('Extrathumbs search error:', error);
    return [];
  }
};

export const searchTubepornclassic = async (query = 'trending', page = 1) => {
  try {
    const searchUrl = `https://www.tubepornclassic.com/search/${encodeURIComponent(query)}/${page}`;
    return [{
      id: 'tpc_redirect',
      title: `Search "${query}" on TubePornClassic`,
      thumbnail: 'https://picsum.photos/320/180?random=tubepornclassic',
      externalUrl: searchUrl,
      platform: 'TubePornClassic',
      views: 0,
      publishedAt: new Date().toISOString(),
      duration: 0,
    }];
  } catch (error) {
    console.error('TubePornClassic search error:', error);
    return [];
  }
};
