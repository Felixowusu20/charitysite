import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Brand Section */}
          <Col md={4} className="footer-brand">
            <h3 className="footer-title">Adei Purity Foundation</h3>
            <p className="footer-description">
              Empowering communities, transforming lives. Together, we create
              opportunities for a brighter future.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/services">Services</Link>
                
              </li>
              <li>
              <Link to="/contact">Contact</Link>
                
              </li>
            </ul>
          </Col>

          {/* Contact & Socials Section */}
          <Col md={4} className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>Email: adeipurityfoundation@gmail.com</p>
            <p>Phone: +233 123 456 789</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@adeipurityfoundation" target="_blank" rel="noreferrer">
                <FaTiktok/>
              </a>
              <a href="https://www.instagram.com/adeipurityfoundation/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer"> */}
                {/* <FaLinkedin /> */}
              {/* </a> */}
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Adei Purity Foundation. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
