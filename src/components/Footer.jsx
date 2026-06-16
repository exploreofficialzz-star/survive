import Link from 'next/link';
import { SITE_NAME, CATEGORIES } from '../lib/constants';
export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] mt-12 py-8 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <p className="text-white font-bold mb-2">{SITE_NAME}</p>
            <p>Free adult video aggregator. All videos are embedded from third-party platforms.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Categories</p>
            <div className="space-y-1">
              {CATEGORIES.slice(0,5).map(c => <Link key={c.slug} href={`/category/${c.slug}`} className="block hover:text-[#cc0000]">{c.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Legal</p>
            <div className="space-y-1">
              <Link href="/terms-of-service" className="block hover:text-[#cc0000]">Terms of Service</Link>
              <Link href="/privacy-policy" className="block hover:text-[#cc0000]">Privacy Policy</Link>
              <Link href="/dmca" className="block hover:text-[#cc0000]">DMCA</Link>
              <Link href="/disclaimer" className="block hover:text-[#cc0000]">Disclaimer</Link>
              <Link href="/2257" className="block hover:text-[#cc0000]">18 U.S.C. 2257</Link>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Info</p>
            <div className="space-y-1">
              <Link href="/trending" className="block hover:text-[#cc0000]">Trending</Link>
              <Link href="/search" className="block hover:text-[#cc0000]">Search</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1f1f1f] pt-4 text-center space-y-1">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>This site does not host, upload or store any videos. All content is embedded from third-party platforms.</p>
          <p>All persons depicted are 18 years of age or older. All models information is held by the original content providers.</p>
        </div>
      </div>
    </footer>
  );
}
