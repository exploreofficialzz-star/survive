import Link from 'next/link';
import { formatViews, formatDuration, timeAgo } from '../lib/utils';

export default function VideoCard({ video }) {
  const url = `/watch?id=${video.id}&title=${encodeURIComponent(video.title)}&embed=${encodeURIComponent(video.embedUrl)}&platform=${video.platform}`;
  return (
    <Link href={url} className="video-card block bg-[#141414] rounded-lg overflow-hidden hover:ring-1 hover:ring-[#cc0000] transition">
      <div className="relative overflow-hidden aspect-video bg-black">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" loading="lazy" />
        {video.duration > 0 && (
          <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">{formatDuration(video.duration)}</span>
        )}
        <span className="absolute top-1 left-1 bg-[#cc0000] text-white text-xs px-1.5 rounded font-semibold">{video.platform}</span>
      </div>
      <div className="p-2">
        <p className="text-white text-sm font-medium line-clamp-2 leading-snug">{video.title}</p>
        <p className="text-gray-500 text-xs mt-1">{formatViews(video.views)} views · {timeAgo(video.publishedAt)}</p>
      </div>
    </Link>
  );
}
