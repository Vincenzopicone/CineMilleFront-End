import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {BsFilm} from 'react-icons/bs';

function NavBar() {
  return (
    <nav className='navBar p-5'>
      <Link to={'/'} className='text-decoration-none text-dark'><h2 className='titleNavBar'><span><BsFilm/></span> CineMille</h2></Link>
    </nav>

  );
}

export default NavBar;
