import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Contact & Socials Section */}
          <Col md={4} className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>Email: info@reachoutafrica.org</p>
            <p>Phone: +233 123 456 789</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
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
