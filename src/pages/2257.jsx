import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_NAME, CONTACT_EMAIL } from '../lib/constants';
export default function USC2257() {
  return (
    <>
      <Head><title>18 U.S.C. 2257 — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">18 U.S.C. 2257 Compliance</h1>
        <div className="space-y-4 text-gray-400">
          <p>{SITE_NAME} is not a primary or secondary producer of any of the content found on this website as defined under 18 U.S.C. § 2257.</p>
          <p>All videos displayed on this site are embedded from third-party platforms. The operators of those platforms are the producers of said content and maintain all required records pursuant to 18 U.S.C. § 2257 and 28 C.F.R. 75.</p>
          <p>All persons appearing in visual depictions on this website were 18 years of age or older at the time those depictions were created.</p>
          <p>Exemption statement: {SITE_NAME} is exempt from the record-keeping requirements of 18 U.S.C. § 2257 with respect to all content as it functions solely as an aggregator and embedder of third-party content.</p>
          <p>For questions regarding 2257 compliance, contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#cc0000]">{CONTACT_EMAIL}</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
