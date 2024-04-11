import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavbarAsli';
import NavbarAsli from './components/NavbarAsli';
import Footer from './components/Footer';
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
    <>
        <NavbarAsli />
        <Component {...pageProps} />
        <Footer />
    </>
  )
}
