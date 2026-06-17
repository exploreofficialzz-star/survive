import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import { SITE_NAME } from '../lib/constants';

export default function Watch() {
  const { query } = useRouter();
  const { title, externalUrl, platform } = query;

  return (
    <>
      <Head>
        <title>{title} — {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <main className="w-full px-2 sm:px-4 py-6">
        <div className="w-full">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            {externalUrl ? (
              <iframe
                src={externalUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
                style={{ border: 'none' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Video URL not available
              </div>
            )}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-500 text-sm mb-4">Source: <span className="text-[#cc0000] font-semibold">{platform}</span></p>
          <AdSlot type="banner" />
          <div className="bg-[#141414] border border-[#222] rounded-lg p-4 mt-4 text-xs sm:text-sm text-gray-400">
            <p className="mb-2">
              ℹ️ This video is hosted on <strong>{platform}</strong>. You are viewing it through {SITE_NAME}.
            </p>
            <p>
              All content, monetization, and ads belong to {platform}. {SITE_NAME} is a video discovery platform.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
