import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavBar() {

  const router=useRouter()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TODO App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/today"><Link href='/today'>Today</Link></Nav.Link>
            <Nav.Link href="/today/completed"><Link href='/today/completed'>Completed</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;