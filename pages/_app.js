import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/BasicExample';

export default function App({ Component, pageProps }) {
  return(
    <>
    <BasicExample/>
  <Component {...pageProps} /> </>
  )
}
