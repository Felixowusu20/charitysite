import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../../Footer/Footer";
import "./ContactPage.css";
import img from "../../../../images/icons/contact.jpg";
import Contactintro from "./contactintro";
import Bar from "../../../NavBar/Navtab";
import ContactForm from "../../../../Components/Pages/HomePage/Contact/Contact";
import './Contactintro.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  const iconColor = "#ff7e5f";

  return (
    <>
      <Bar/>
      <Contactintro
        heading={"All Questions are welcome"}
        typewriterTexts={["Have any questions or need assistance? Our team is here to help"]}
      />
      
      <div className="contact-hero">
        <Container>
          <Row className="align-items-center">
            <Col sm={6} className="text-container">
              <h1 className="contact-title text-center">Contact Us</h1>
              <p className="contact-description">
                Have any questions or need assistance? Our team is here to help.
                Reach out to us, and we'll get back to you as soon as possible.
              </p>
            </Col>

            <Col sm={6} className="image-container">
              <img src={img} alt="Contact Us" className="contact-image" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="contact-section-container">
        <Row>
          <Col lg={5} md={12} className="contact-info-col mb-5 mb-lg-0">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt size={24} color={iconColor} />
                </div>
                <p>La Agyemang, near the La police station</p>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <FaPhone size={24} color={iconColor} />
                </div>
                <div>
                <p>+233 55 344 5748</p>
                <p>+233 24 141 8662</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-wrapper">
                  <FaEnvelope size={24} color={iconColor} />
                </div>
                <p>adeipurityfoundation@gmail.com</p>
              </div>
            </div>
          </Col>

          <Col className="contact-form-col">
            <ContactForm/>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ContactPage;