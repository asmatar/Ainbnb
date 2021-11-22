//import progress bar from npm librairy
import ProgressBar from '@badrap/bar-of-progress';
import "mapbox-gl/dist/mapbox-gl.css";
import { Provider } from "next-auth/client";
import Router from 'next/router';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
// initialize progress bar with parameters
const progress = new ProgressBar({
  size:4,
  color: "#FE595E",
  className:'z-50',
  delay: 100,
})
// we add on event listener, when the route change, the progress bar have to start
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)


function MyApp({ Component, pageProps }) {
  
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  
  </Provider>
}

export default MyApp
