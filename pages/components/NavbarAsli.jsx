import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import Styles from './nabar.module.css'

function NavbarAsli() {
  return (
    <Navbar expand="lg" className="bg-dark mb-3">
      <Container>
      <Link href='/about' className={`${Styles.navbarbrand} nav-link navbar-brand`}>mhmdrezachizari</Link>
        <Navbar.Toggle  className={Styles.c1} claria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href='/Login' className={`${Styles.linkbav} nav-link`}>singup</Link>
            <Link href='/product' className={`${Styles.linkbav} nav-link`}>Products</Link>
            <Link href='/sale' className={`${Styles.linkbav} nav-link`}>Increadible</Link>
            <Link href='/about' className={`${Styles.linkbav} nav-link`}>about</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAsli;