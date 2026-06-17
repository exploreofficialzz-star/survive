import axios from 'axios';

export const searchPornHub = async (query, page = 1) => {
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
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `ph_${video.video_id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'Pornhub',
      views: parseInt(video.views) || 0,
      publishedAt: video.publish_date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Pornhub search error:', error);
    return [];
  }
};

export const searchXVideos = async (query, page = 1) => {
  try {
    const response = await axios.get('https://www.xvideos.com/api/videos/search', {
      params: {
        keyword: query,
        page: page,
        sort: 'relevance',
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `xv_${video.id}`,
      title: video.title,
      thumbnail: video.image,
      externalUrl: `https://www.xvideos.com${video.url}`,
      platform: 'XVideos',
      views: parseInt(video.views) || 0,
      publishedAt: video.date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('XVideos search error:', error);
    return [];
  }
};

export const searchRedtube = async (query, page = 1) => {
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
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `rt_${video.video_id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'Redtube',
      views: parseInt(video.views) || 0,
      publishedAt: video.created,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Redtube search error:', error);
    return [];
  }
};

export const searchYouporn = async (query, page = 1) => {
  try {
    const response = await axios.get('https://www.youporn.com/api/search', {
      params: {
        query: query,
        page: page,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.results) return [];

    return response.data.results.map(video => ({
      id: `yp_${video.id}`,
      title: video.title,
      thumbnail: video.thumbnail,
      externalUrl: video.link,
      platform: 'YouPorn',
      views: parseInt(video.views) || 0,
      publishedAt: video.publish_date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('YouPorn search error:', error);
    return [];
  }
};

export const searchSpankbang = async (query, page = 1) => {
  try {
    const response = await axios.get('https://spankbang.com/api/v1/videos/search', {
      params: {
        q: query,
        p: page,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `sb_${video.id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'SpankBang',
      views: parseInt(video.views) || 0,
      publishedAt: video.date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('SpankBang search error:', error);
    return [];
  }
};

export const searchClippit = async (query, page = 1) => {
  try {
    const response = await axios.get('https://clippit.tv/api/videos', {
      params: {
        search: query,
        page: page,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `cp_${video.id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'Clippit',
      views: parseInt(video.views) || 0,
      publishedAt: video.date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Clippit search error:', error);
    return [];
  }
};

export const searchExtrathumbs = async (query, page = 1) => {
  try {
    const response = await axios.get('https://www.extrathumbs.com/api/search', {
      params: {
        search: query,
        page: page,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `et_${video.id}`,
      title: video.title,
      thumbnail: video.image,
      externalUrl: video.url,
      platform: 'Extrathumbs',
      views: parseInt(video.views) || 0,
      publishedAt: video.date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('Extrathumbs search error:', error);
    return [];
  }
};

export const searchTubepornclassic = async (query, page = 1) => {
  try {
    const response = await axios.get('https://www.tubepornclassic.com/api/videos', {
      params: {
        search: query,
        page: page,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.data.videos) return [];

    return response.data.videos.map(video => ({
      id: `tpc_${video.id}`,
      title: video.title,
      thumbnail: video.thumb,
      externalUrl: video.url,
      platform: 'TubePornClassic',
      views: parseInt(video.views) || 0,
      publishedAt: video.date,
      duration: parseInt(video.duration) || 0,
    }));
  } catch (error) {
    console.error('TubePornClassic search error:', error);
    return [];
  }
};
