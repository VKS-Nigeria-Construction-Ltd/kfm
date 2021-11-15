import {
    Container,
    Navbar,
    Nav,
  } from 'react-bootstrap';
  import { NavLink } from 'react-router-dom';
  import logoDark from '../images/kfm_logo_dark.png';

const MainNav = () => {
    

    return (
        <>
        <div className="top_bar"></div>
        <Container className='mainNav'>
          <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-main navbar-transparent
      navbar-light bg-light"
        id="navbar-main"
      >
          <NavLink to="/" className="navbar-brand" role="button">
            <img src={logoDark} className="logo" alt="logo" style={{ height: '50px', width: '100px' }} />
          </NavLink>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto align-items-lg-center">
              <Nav.Link to="/" className="nav-link" role="button">HAPPINESS BEGINS NOW</Nav.Link>   
            </Nav>

            <Nav className="mr-auto align-items-lg-center text-uppercase main-menu">
              <NavLink to="/" className="nav-link" role="button">Home</NavLink>
              <NavLink to="/" className="nav-link" role="button">About Us</NavLink>
              <NavLink to="/" className="nav-link" role="button">Services</NavLink>
              <NavLink to="/" className="nav-link" role="button">News</NavLink>
              <NavLink to="/" className="nav-link" role="button">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
        </>
    )
}

export default MainNav;