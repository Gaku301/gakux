import '../styles/globals.css';
// fontawesome アイコン肥大化を回避
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwindcss/tailwind.css';
import 'highlight.js/styles/stackoverflow-light.css';

import usePageView from '../hooks/usePageView';
import GoogleAnalytics from '../components/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  usePageView()

  return (
    <>
      {/* <GoogleAnalytics /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
