import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {BsFilm} from 'react-icons/bs';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" >
      <Container fluid >
        <Navbar.Brand href="/" className='text-warning fw-bold'><span><BsFilm/></span> CineMille</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link className='text-light text-decoration-none me-2' to={'/'}>Programmazione</Link> */}
            <Link className='text-warning text-decoration-none me-2' to={'/film'}>Film</Link>
            <Link className='text-warning text-decoration-none me-2' to={'/sale'}>Sale</Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Cerca</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;