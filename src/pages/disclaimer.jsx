import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_NAME } from '../lib/constants';
export default function Disclaimer() {
  return (
    <>
      <Head><title>Disclaimer — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Disclaimer</h1>
        <div className="space-y-4 text-gray-400">
          <p><strong className="text-white">Adult Content:</strong> This website contains sexually explicit material intended solely for adults 18 years of age or older.</p>
          <p><strong className="text-white">No Hosting:</strong> {SITE_NAME} does not produce, host, or upload any video content. All videos are embedded from third-party platforms and remain the property of their respective owners.</p>
          <p><strong className="text-white">Third-Party Links:</strong> We are not responsible for the content, accuracy, or practices of third-party platforms whose content is embedded here.</p>
          <p><strong className="text-white">Legal Compliance:</strong> All performers in embedded content are 18 years of age or older. Records are maintained by the original content producers in accordance with 18 U.S.C. 2257.</p>
          <p><strong className="text-white">Jurisdiction:</strong> You are responsible for ensuring that your access to this site complies with the laws of your local jurisdiction.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
