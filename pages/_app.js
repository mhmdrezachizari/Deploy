import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavbarAsli';
import NavbarAsli from './components/NavbarAsli';

export default function App({ Component, pageProps }) {
  return(
    <>
    <NavbarAsli/>
  <Component {...pageProps} /> </>
  )
}
