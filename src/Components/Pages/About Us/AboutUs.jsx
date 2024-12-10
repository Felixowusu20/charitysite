import React from "react";
import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutimg from "./../../../images/site logo/brand-logo1.png";
import { Button } from "react-bootstrap";
// import { FaChild } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Text Section */}
        <Col md={6} className="order-2 order-md-1">
          <h3 className="text-primary">About Us</h3>
          <h2 className="fw-bold mb-3">
            Helping Each Other Can Make the World Better
          </h2>
          <hr className="mb-4" />
          <div className="d-flex align-items-start">
            <div>
              <h4 className="fw-semibold mb-3">Help for the Children</h4>
              <p className="text-muted">
                REACH OUT AFRICA is a non-profit organization made up of
                students, lawyers, pharmacists, doctors, nurses, and other
                professionals who are like-minded in bringing relief to
                dispirited communities in Africa. This, we do through our
                outreach programs. Activities of our outreach programs include:
                health promotion through health education and free health
                screening, mentorship program to school children, donations, and
                general counseling.
              </p>
              <Button variant="primary" className="mt-2">
                Read More
              </Button>
            </div>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="order-1 order-md-2 text-center">
          <img
            src={aboutimg}
            alt="About Us"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
