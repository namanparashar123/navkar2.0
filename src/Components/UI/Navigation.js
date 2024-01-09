import React from "react";
import logo from "../images/newLogo.png";
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import "./NavUpdated.css";

const Navigation = () => {

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Nav defaultActiveKey="/home" as="ul" className="navigation">
      <Nav.Item as="li" className="nav-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </Nav.Item>
      <ul className="nav-bar"> 
        <Nav.Item as="li">
          <Nav.Link style={{color:"#FAF9F6"}} href="" onClick={() => scrollToSection('home', 150)}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link style={{color:"#FAF9F6"}} href="" onClick={() => scrollToSection('services', 235)}>Services</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link style={{color:"#FAF9F6"}} href='/Locations' target="_blank" onClick={() => scrollToSection('locations', 200)}>Areas Serviced</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link style={{color:"#FAF9F6"}} href='' onClick={() => scrollToSection('contact', 150)}>Contact</Nav.Link>
        </Nav.Item>
      </ul>
  </Nav>
  );
};

export default Navigation;
