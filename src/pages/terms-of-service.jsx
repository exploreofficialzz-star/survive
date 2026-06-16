import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_NAME, CONTACT_EMAIL } from '../lib/constants';
export default function Terms() {
  return (
    <>
      <Head><title>Terms of Service — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        {[
          ['Acceptance', `By accessing ${SITE_NAME} you agree to these Terms of Service. If you do not agree, do not use this site.`],
          ['Age Requirement', 'You must be at least 18 years of age (or the age of majority in your jurisdiction, whichever is higher) to access this site. By entering you confirm you meet this requirement.'],
          ['Content', `${SITE_NAME} does not host, upload, or store any video content. All videos are embedded from third-party platforms including YouTube, Dailymotion, and others. We are not responsible for the content of those platforms.`],
          ['Prohibited Use', 'You may not use this site to distribute illegal content, violate copyright, harass others, circumvent age restrictions, or violate any applicable laws.'],
          ['Intellectual Property', 'All embedded content belongs to its respective owners and platforms. Our site design and code are proprietary.'],
          ['Disclaimer', 'This site is provided "as is" without warranties of any kind. We are not liable for any damages arising from use of this site.'],
          ['Changes', 'We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of updated terms.'],
          ['Contact', `Questions? Contact ${CONTACT_EMAIL}`],
        ].map(([h, p]) => (
          <div key={h} className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">{h}</h2>
            <p className="text-gray-400">{p}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
