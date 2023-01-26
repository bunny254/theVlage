import 'tailwindcss/tailwind.css'
import '../src/components/login.css'
import '../styles/global.css'
import '../src/components/styles.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: "#0C3A69",
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
