export const formatViews = (v) => {
  if (!v) return '0';
  if (v >= 1000000) return `${(v/1000000).toFixed(1)}M`;
  if (v >= 1000) return `${(v/1000).toFixed(1)}K`;
  return v.toString();
};
export const formatDuration = (s) => {
  if (!s) return '';
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${m}:${String(sec).padStart(2,'0')}`;
};
export const timeAgo = (d) => {
  const diff = Math.floor((Date.now() - new Date(d))/1000);
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
};
