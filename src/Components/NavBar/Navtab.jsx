import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navtab.css";
import logo from "../../images/site logo/brand-logo1.png";

const Navtab = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "white",
    linkColor: "black",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setNavbarStyle({
          backgroundColor: "rgb(26,26,41)",
          linkColor: "white",
        });
      } else {
        setNavbarStyle({
          backgroundColor: "white",
          linkColor: "black",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="shadow-sm py-3"
        style={{
          backgroundColor: navbarStyle.backgroundColor,
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
            <img
              src={logo}
              alt="Site Logo"
              className="me-2"
              style={{ height: "70px", width: "auto" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link
                as={Link}
                to="/"
                className="mx-2 fw-semibold nav-hover"
                style={{ color: navbarStyle.linkColor }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/About"
                className="mx-2 fw-semibold nav-hover"
                style={{ color: navbarStyle.linkColor }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="mx-2 fw-semibold nav-hover"
                style={{ color: navbarStyle.linkColor }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/news"
                className="mx-2 fw-semibold nav-hover"
                style={{ color: navbarStyle.linkColor }}
              >
                News
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="mx-2 fw-semibold nav-hover"
                style={{ color: navbarStyle.linkColor }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/donate"
                className="mx-2 fw-semibold btn btn-primary textColor px-3 py-1 rounded-pill"
                style={{ cursor: "pointer", color: navbarStyle.linkColor }}
              >
                Make a Donation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navtab;