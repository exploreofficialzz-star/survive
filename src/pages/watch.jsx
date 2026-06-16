import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import CPASidebar from '../components/CPASidebar';
import { SITE_NAME } from '../lib/constants';

export default function Watch() {
  const { query } = useRouter();
  const { title, embed, platform } = query;

  return (
    <>
      <Head>
        <title>{title} — {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        <div className="flex-1 min-w-0">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            {embed && <iframe src={embed} width="100%" height="100%" allowFullScreen frameBorder="0" allow="autoplay; fullscreen" />}
          </div>
          <h1 className="text-lg font-bold text-white mt-4">{title}</h1>
          <p className="text-gray-500 text-sm mt-1">Source: {platform}</p>
          <AdSlot type="banner" />
          <p className="text-xs text-gray-600 mt-2">
            This video is embedded from {platform}. {SITE_NAME} does not host this content.
          </p>
        </div>
        <aside className="w-64 shrink-0 hidden lg:block"><CPASidebar /></aside>
      </main>
      <Footer />
    </>
  );
}
