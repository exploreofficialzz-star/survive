import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import AdSlot from '../components/AdSlot';
import CPASidebar from '../components/CPASidebar';
import { fetchVideos } from '../lib/platforms';
import { SITE_NAME, SITE_DESCRIPTION, CATEGORIES } from '../lib/constants';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos('adult free videos').then(v => { setVideos(v); setLoading(false); });
  }, []);

  return (
    <>
      <Head>
        <title>{SITE_NAME} — Free Adult Videos</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <div className="flex-1 min-w-0">
          <AdSlot type="banner" />
          <h1 className="text-xl font-bold text-white mb-4">🔥 Featured Videos</h1>
          <VideoGrid videos={videos} loading={loading} />
          <div className="mt-8">
            <h2 className="text-lg font-bold text-white mb-4">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {CATEGORIES.map(c => (
                <a key={c.slug} href={`/category/${c.slug}`}
                  className="bg-[#141414] hover:bg-[#cc0000] border border-[#222] rounded-lg p-3 text-center text-sm font-semibold text-gray-300 hover:text-white transition">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <aside className="w-64 shrink-0 hidden lg:block">
          <CPASidebar />
        </aside>
      </main>
      <Footer />
    </>
  );
}
