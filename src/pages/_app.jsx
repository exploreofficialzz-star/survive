import '../styles/globals.css';
import AgeVerification from '../components/AgeVerification';
import KofiButton from '../components/KofiButton';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AgeVerification />
      <Component {...pageProps} />
      <KofiButton />
    </>
  );
}
