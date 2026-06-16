import Link from 'next/link';
import { SITE_NAME } from '../lib/constants';
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl font-black text-[#cc0000] mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
        <Link href="/" className="bg-[#cc0000] hover:bg-[#aa0000] text-white px-6 py-3 rounded-lg font-semibold transition">Back to {SITE_NAME}</Link>
      </div>
    </div>
  );
}
