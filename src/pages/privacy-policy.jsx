import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_NAME, CONTACT_EMAIL } from '../lib/constants';
export default function PrivacyPolicy() {
  return (
    <>
      <Head><title>Privacy Policy — {SITE_NAME}</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        {[
          ['Information We Collect', 'We collect minimal data necessary to operate this service. This includes browser type, IP address, pages visited, and time spent on the site via anonymous analytics tools.'],
          ['Cookies', 'We use cookies to remember your age verification status and preferences. Third-party ad networks (ExoClick) may also place cookies. You can disable cookies in your browser settings.'],
          ['Third-Party Content', 'All videos are embedded from third-party platforms. Those platforms have their own privacy policies and we are not responsible for their data practices.'],
          ['Advertising', 'We use third-party ad networks that may use cookies and tracking technologies to serve relevant ads. You can opt out via your browser or ad network opt-out tools.'],
          ['Data Sharing', 'We do not sell your personal data. We do not share personal information with third parties except as required by law.'],
          ['Children', 'This site is strictly for adults 18 years of age or older. We do not knowingly collect data from minors.'],
          ['Contact', `For privacy concerns contact us at ${CONTACT_EMAIL}`],
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
