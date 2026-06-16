import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import { fetchVideos } from '../lib/platforms';
import { SITE_NAME } from '../lib/constants';

export default function Trending() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchVideos('trending adult videos 2025').then(v => { setVideos(v); setLoading(false); });
  }, []);
  return (
    <>
      <Head><title>Trending — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-4">🔥 Trending Now</h1>
        <VideoGrid videos={videos} loading={loading} />
      </main>
      <Footer />
    </>
  );
}
