import axios from 'axios';

const MOCK_VIDEOS = [
  {
    id: 'mock_1',
    title: 'Popular Video 1',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/12/34/56/123456789_180.jpg',
    externalUrl: 'https://www.pornhub.com',
    platform: 'Pornhub',
    views: 1500000,
    publishedAt: new Date(Date.now() - 7*24*60*60*1000).toISOString(),
    duration: 1200,
  },
  {
    id: 'mock_2',
    title: 'Trending Video 2',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/98/76/54/987654321_180.jpg',
    externalUrl: 'https://www.xvideos.com',
    platform: 'XVideos',
    views: 2100000,
    publishedAt: new Date(Date.now() - 3*24*60*60*1000).toISOString(),
    duration: 1800,
  },
  {
    id: 'mock_3',
    title: 'Hot Video 3',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/45/67/89/456789012_180.jpg',
    externalUrl: 'https://www.redtube.com',
    platform: 'Redtube',
    views: 980000,
    publishedAt: new Date(Date.now() - 1*24*60*60*1000).toISOString(),
    duration: 900,
  },
  {
    id: 'mock_4',
    title: 'New Release 4',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/78/90/12/789012345_180.jpg',
    externalUrl: 'https://www.youporn.com',
    platform: 'YouPorn',
    views: 1200000,
    publishedAt: new Date(Date.now() - 2*24*60*60*1000).toISOString(),
    duration: 1500,
  },
  {
    id: 'mock_5',
    title: 'Featured Video 5',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/34/56/78/345678901_180.jpg',
    externalUrl: 'https://spankbang.com',
    platform: 'SpankBang',
    views: 750000,
    publishedAt: new Date(Date.now() - 5*24*60*60*1000).toISOString(),
    duration: 1100,
  },
  {
    id: 'mock_6',
    title: 'Best Video 6',
    thumbnail: 'https://img-hw.xvideos.com/videos/thumbs169ll/67/89/01/678901234_180.jpg',
    externalUrl: 'https://www.pornhub.com',
    platform: 'Pornhub',
    views: 1800000,
    publishedAt: new Date(Date.now() - 4*24*60*60*1000).toISOString(),
    duration: 2000,
  },
];

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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(0, 3);

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
    return MOCK_VIDEOS.slice(0, 3);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(1, 3);

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
    return MOCK_VIDEOS.slice(1, 3);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(2, 4);

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
    return MOCK_VIDEOS.slice(2, 4);
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
      },
      timeout: 5000,
    });

    if (!response.data.results || response.data.results.length === 0) return MOCK_VIDEOS.slice(3, 5);

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
    return MOCK_VIDEOS.slice(3, 5);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(4, 6);

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
    return MOCK_VIDEOS.slice(4, 6);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(0, 2);

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
    return MOCK_VIDEOS.slice(0, 2);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(1, 3);

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
    return MOCK_VIDEOS.slice(1, 3);
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
      },
      timeout: 5000,
    });

    if (!response.data.videos || response.data.videos.length === 0) return MOCK_VIDEOS.slice(2, 4);

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
    return MOCK_VIDEOS.slice(2, 4);
  }
};
