import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import Styles from './nabar.module.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
      <Link href='/about' className={Styles.navbarbrand}>mhmdrezachizari</Link>
        <Navbar.Toggle  className={Styles.c1} claria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href='/Login' className={Styles.linkbav}>Login</Link>
            <Link href='/product' className={Styles.linkbav}>Products</Link>
            <Link href='/sale' className={Styles.linkbav}>Increadible</Link>
            <Link href='/about' className={Styles.linkbav}>about</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;