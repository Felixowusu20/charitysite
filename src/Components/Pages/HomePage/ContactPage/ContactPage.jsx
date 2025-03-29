import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../../Footer/Footer";
import "./ContactPage.css";
import img from "../../../../images/icons/contact.jpg"; // Correct import
import intro from "../../Donate/Intro"
import Intro from "../../Donate/Intro";
import Bar from "../../../NavBar/Navtab"
import ContactForm from "../../../../Components/Pages/HomePage/Contact/Contact"

function ContactPage() {
  return (
    <>
    <Bar/>
    <Intro 
    heading={"All Questions are welcome"}
    typewriterTexts={["Have any questions or need assistance? Our team is here to help"]}
    
    />
      {/* Hero Section */}
      <div className="contact-hero">
        <Container>
          <Row className="align-items-center">
            {/* Left Text Section */}
            <Col sm={6} className="text-container">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-description">
                Have any questions or need assistance? Our team is here to help.
                Reach out to us, and we’ll get back to you as soon as possible.
              </p>
            </Col>

            {/* Right Image Section */}
            <Col sm={6} className="image-container">
              <img src={img} alt="Contact Us" className="contact-image" />
            </Col>
          </Row>
        </Container>
      </div>

    <ContactForm/>

      <Footer />
    </>
  );
}

export default ContactPage;
