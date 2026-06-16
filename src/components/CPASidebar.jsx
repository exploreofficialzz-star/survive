import { CRAKREVENUE_LINK, ADSEMPIRE_LINK } from '../lib/constants';
export default function CPASidebar() {
  return (
    <div className="space-y-4">
      <a href={CRAKREVENUE_LINK} target="_blank" rel="noopener noreferrer sponsored"
        className="block bg-[#1a1a1a] border border-[#333] hover:border-[#cc0000] rounded-lg p-4 text-center transition">
        <div className="text-2xl mb-1">💋</div>
        <p className="text-white font-semibold text-sm">Meet Singles Near You</p>
        <p className="text-gray-500 text-xs mt-1">Join Free Today</p>
      </a>
      <a href={ADSEMPIRE_LINK} target="_blank" rel="noopener noreferrer sponsored"
        className="block bg-[#1a1a1a] border border-[#333] hover:border-[#cc0000] rounded-lg p-4 text-center transition">
        <div className="text-2xl mb-1">🔴</div>
        <p className="text-white font-semibold text-sm">Watch Live Cams</p>
        <p className="text-gray-500 text-xs mt-1">Free to Join</p>
      </a>
    </div>
  );
}
