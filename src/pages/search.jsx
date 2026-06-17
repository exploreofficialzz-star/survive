import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import { fetchVideos } from '../lib/platforms';
import { SITE_NAME } from '../lib/constants';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) return;
    setLoading(true);
    fetchVideos(q).then(v => { setVideos(v); setLoading(false); });
  }, [q]);

  return (
    <>
      <Head><title>Search: {q} — {SITE_NAME}</title></Head>
      <Header />
      <main className="w-full px-2 sm:px-4 py-6">
        <h1 className="text-xl font-bold text-white mb-4">Results for: <span className="text-[#cc0000]">"{q}"</span></h1>
        <VideoGrid videos={videos} loading={loading} />
      </main>
      <Footer />
    </>
  );
}
