import { useState, useEffect } from 'react';
import { SITE_NAME } from '../lib/constants';

export default function AgeVerification() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('age_verified')) setShow(true);
  }, []);
  const verify = () => { localStorage.setItem('age_verified', '1'); setShow(false); };
  const leave = () => { window.location.href = 'https://www.google.com'; };
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <div className="bg-[#141414] border border-[#333] rounded-2xl p-8 max-w-md w-full mx-4 text-center">
        <div className="text-6xl font-black text-[#cc0000] mb-2">18+</div>
        <h1 className="text-2xl font-bold text-white mb-2">{SITE_NAME}</h1>
        <p className="text-gray-400 text-sm mb-6">
          This website contains adult content intended for persons 18 years or older.
          By entering you confirm you are at least 18 years of age and agree to our{' '}
          <a href="/terms-of-service" className="text-[#cc0000] underline">Terms of Service</a> and{' '}
          <a href="/privacy-policy" className="text-[#cc0000] underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-3">
          <button onClick={leave} className="flex-1 py-3 rounded-lg border border-[#333] text-gray-400 hover:bg-[#1f1f1f] transition font-semibold">
            Leave
          </button>
          <button onClick={verify} className="flex-1 py-3 rounded-lg bg-[#cc0000] hover:bg-[#aa0000] transition text-white font-bold">
            I am 18+ — Enter
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          By clicking enter you agree to our Terms of Service and confirm you are of legal age in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
