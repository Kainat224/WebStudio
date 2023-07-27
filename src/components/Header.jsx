import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.svg";
import "../App.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="navBarStyling">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={Logo} alt="WebStudio" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggleMenuStyle"
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto navHoverStyle">
            <Nav.Link href="#home">Студия</Nav.Link>
            <Nav.Link href="#link">Портфолио</Nav.Link>
            <Nav.Link href="#home">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-none d-sm-none d-md-none d-lg-flex justify-content-between align-items-center emailStyling">
          <a href="mailto:info@devstudio.com" className="navEmail">
            info@devstudio.com
          </a>
          <a href="tel:+38 096 111 11 11">+38 096 111 11 11</a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
