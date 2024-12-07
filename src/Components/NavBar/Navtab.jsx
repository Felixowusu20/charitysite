import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navtab.css"
import { Button } from 'bootstrap';

const Navtab = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary">
            AppLogo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="mx-2 text-light fw-semibold nav-hover"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about-us"
                className="mx-2 text-light fw-semibold nav-hover"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="mx-2 text-light fw-semibold nav-hover"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#news"
                className="mx-2 text-light fw-semibold nav-hover"
              >
                News
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="mx-2 text-light fw-semibold nav-hover"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#donate"
                className="mx-2 fw-semibold btn btn-primary text-light px-3 py-1 rounded-pill"
                style={{ cursor: "pointer" }}
              >
                Make a Donation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navtab