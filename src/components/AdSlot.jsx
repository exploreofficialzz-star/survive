import { useEffect } from 'react';
import { EXOCLICK_ZONE_ID } from '../lib/constants';

export default function AdSlot({ type = 'banner' }) {
  useEffect(() => {
    // ExoClick ad loads here — replace EXOCLICK_ZONE_ID in constants.js
  }, []);
  return (
    <div className="my-4 flex justify-center">
      <div id={`ad-${type}`} className="bg-[#111] border border-[#222] rounded flex items-center justify-center text-gray-600 text-xs"
        style={{ width: type === 'banner' ? 728 : 300, height: type === 'banner' ? 90 : 250, maxWidth: '100%' }}>
        {/* ExoClick Zone ID: {EXOCLICK_ZONE_ID} */}
      </div>
    </div>
  );
}
