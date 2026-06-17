import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SITE_NAME, CATEGORIES } from '../lib/constants';

export default function Header() {
  const router = useRouter();
  const [q, setQ] = useState('');
  const search = (e) => { e.preventDefault(); if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`); };
  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-4">
        <Link href="/" className="text-xl sm:text-2xl font-black text-[#cc0000] shrink-0">{SITE_NAME}</Link>
        <form onSubmit={search} className="flex-1 flex gap-1 sm:gap-2 min-w-0">
          <input
            value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-3 sm:px-4 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-[#cc0000]"
          />
          <button type="submit" className="bg-[#cc0000] hover:bg-[#aa0000] text-white px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition shrink-0">Search</button>
        </form>
      </div>
      <nav className="px-2 sm:px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
        <Link href="/trending" className="shrink-0 px-2 sm:px-3 py-1 rounded-full bg-[#cc0000] text-white text-xs font-semibold">🔥 Trending</Link>
        {CATEGORIES.map(c => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="shrink-0 px-2 sm:px-3 py-1 rounded-full bg-[#1a1a1a] hover:bg-[#cc0000] text-gray-300 hover:text-white text-xs font-semibold transition">
            {c.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
