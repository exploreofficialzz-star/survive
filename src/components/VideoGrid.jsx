import VideoCard from './VideoCard';

export default function VideoGrid({ videos, loading }) {
  if (loading) return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array(12).fill(0).map((_, i) => (
        <div key={i}>
          <div className="skeleton aspect-video w-full mb-2" />
          <div className="skeleton h-4 w-full mb-1" />
          <div className="skeleton h-3 w-2/3" />
        </div>
      ))}
    </div>
  );
  if (!videos?.length) return <p className="text-gray-500 text-center py-20">No videos found.</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {videos.map(v => <VideoCard key={v.id} video={v} />)}
    </div>
  );
}
