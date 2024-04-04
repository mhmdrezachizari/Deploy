import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
      <Link href='/about' className='nav-link navbar-brand text-light'>mhmdrezachizari</Link>
        <Navbar.Toggle  className='text-bg-danger ' claria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href='/Login' className='nav-link text-light'>Login</Link>
            <Link href='/product' className='nav-link text-light'>Products</Link>
            <Link href='/sale' className='nav-link text-light'>Increadible offer</Link>
            <Link href='/about' className='nav-link text-light'>about</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;