import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoGrid from '../../components/VideoGrid';
import AdSlot from '../../components/AdSlot';
import { fetchVideos } from '../../lib/platforms';
import { CATEGORIES, SITE_NAME } from '../../lib/constants';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const cat = CATEGORIES.find(c => c.slug === slug);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cat) return;
    setLoading(true);
    fetchVideos(cat.query).then(v => { setVideos(v); setLoading(false); });
  }, [slug]);

  return (
    <>
      <Head>
        <title>{cat?.label} Videos — {SITE_NAME}</title>
        <meta name="description" content={`Watch free ${cat?.label} videos on ${SITE_NAME}. HD quality, updated daily.`} />
      </Head>
      <Header />
      <main className="w-full px-2 sm:px-4 py-6">
        <div className="w-full">
          <AdSlot type="banner" />
          <h1 className="text-2xl font-bold text-white mb-4">{cat?.label} Videos</h1>
          <VideoGrid videos={videos} loading={loading} />
        </div>
      </main>
      <Footer />
    </>
  );
}
