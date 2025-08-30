import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm py-3 px-4">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold brand-text fs-4">
          <FaUser className="me-2" />
          Prasad Reddy DevOps
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            {[
              'home',
              'about',
              'summary',
              'experience',
              'educations',
              'projects',
              'skills',
              'certification',
              'contact',
            ].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className="nav-link-custom px-3"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
