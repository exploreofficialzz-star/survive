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
              <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] border border-[#1f1f1f]">
                <a 
                  href={externalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#cc0000] hover:bg-[#aa0000] text-white px-8 py-4 rounded-lg font-bold text-lg transition"
                >
                  Open Video on {platform}
                </a>
              </div>
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
              ℹ️ This video is hosted on <strong>{platform}</strong>. Click the button above to watch it on their official site.
            </p>
            <p>
              {SITE_NAME} does not host this content. We provide search and discovery for videos across multiple platforms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
