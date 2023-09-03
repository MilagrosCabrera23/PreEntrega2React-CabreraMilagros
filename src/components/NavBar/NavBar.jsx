import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css'


const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="NavbarContainer">
            <Container>
                <Navbar.Brand>Electra-Tech
                    <Link to={"/"}></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mt-1 navbar">
                        <Nav.Link className='' >
                            <Link to={"/"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link className='' >
                            <Link to={"/category/smartphones"}>|Smartphones</Link>
                        </Nav.Link>
                        <Nav.Link className=''>
                            <Link to={"/category/laptops"}>|Laptops</Link>
                        </Nav.Link>
                        <Nav.Link className=''>
                            <Link to={"/category/fragrances"}>|Fragancias</Link>
                        </Nav.Link>
                        <Nav.Link className=''>
                            <Link to={"/category/skincare"}>|Skincare</Link>
                        </Nav.Link>
                        <Nav.Link className=''>
                            <Link to={"/category/groceries"}>|Comestibles</Link>
                        </Nav.Link>
                        <Nav.Link className=''>
                            <Link to={"/category/home-decoration"}>|Home Decoracion</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

export default NavBarComponent;