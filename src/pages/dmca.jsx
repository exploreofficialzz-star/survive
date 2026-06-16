import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_NAME, DMCA_EMAIL } from '../lib/constants';
export default function DMCA() {
  return (
    <>
      <Head><title>DMCA Notice — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">DMCA Notice & Takedown Policy</h1>
        <div className="space-y-6 text-gray-400">
          <p>{SITE_NAME} respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA).</p>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Our Role</h2>
            <p>This site functions as an aggregator and embeds videos from third-party platforms. We do not host, store, or upload any video content. If you believe content infringes your copyright, you should contact the hosting platform directly (YouTube, Dailymotion, etc.).</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Submit a Takedown Request</h2>
            <p>If you are a rights holder and wish to have an embedded link removed from our site, send a DMCA notice to <a href={`mailto:${DMCA_EMAIL}`} className="text-[#cc0000]">{DMCA_EMAIL}</a> including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your contact information</li>
              <li>URL of the page on our site containing the embed</li>
              <li>Description of the copyrighted work</li>
              <li>Statement that you have a good faith belief the use is unauthorized</li>
              <li>Statement under penalty of perjury that you are authorized to act on behalf of the copyright owner</li>
              <li>Your physical or electronic signature</li>
            </ul>
          </div>
          <p>We will respond to valid DMCA notices within 72 hours and remove the relevant embed link.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
