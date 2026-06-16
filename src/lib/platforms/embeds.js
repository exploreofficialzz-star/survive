// Embed URL builders for platforms using public embed codes
export const buildEmbedUrl = (platform, videoId) => {
  const map = {
    pornhub: `https://www.pornhub.com/embed/${videoId}`,
    xvideos: `https://www.xvideos.com/embedframe/${videoId}`,
    xhamster: `https://xhamster.com/xembed.php?video=${videoId}`,
    redtube: `https://embed.redtube.com/?id=${videoId}`,
  };
  return map[platform] || '';
};

// Manual curated embed list (add video IDs as you find them)
export const CURATED_EMBEDS = [
  // Add entries like:
  // { id: 'ph_xxx', title: '...', thumbnail: '...', embedUrl: buildEmbedUrl('pornhub','viewkey=xxx'), platform: 'Pornhub', views: 0 }
];
