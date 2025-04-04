import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moneyimg from "../../../../../src/images/icons/money.jpeg";
import schoolimg from "../../../../../src/images/icons/schoolimg.avif";
import medicalimg from "../../../../../src/images/icons/medicals.jpeg";

import moneyicon from "../../../../../src/images/icons/fundraising.png";
import schoolicon from "../../../../../src/images/icons/school.png";
import medicalicon from "../../../../../src/images/icons/medical.png";
import { Link } from "react-router-dom";

import "./Offers.css"; // Import custom CSS

function Ouroffers() {
  const services = [
    {
      id: 1,
      title: "Quick Fund Raising",
      description:
        "Raise funds quickly for your business or personal projects with ease on our trusted platform.",
      icon: moneyicon,
      image: moneyimg,
      link: <Link to='/contact'></Link>,
    },
    {
      id: 2,
      title: "School of Catalog",
      description:
        "Access funding and educational resources to support your academic goals and projects.",
      icon: schoolicon,
      image: schoolimg,
      link: <Link to='/contact'></Link>,

    },
    {
      id: 3,
      title: "Medical Treatment",
      description:
        "Secure financial support for urgent medical treatments and healthcare needs.",
      icon: medicalicon,
      image: medicalimg,
      link: <Link to='/contact'></Link>,

    },
  ];

  return (
    <div className="offers-container">
      {services.map((service) => (
        <Card key={service.id} className="offer-card">
          <Card.Img variant="top" src={service.image} className="offer-image" />
          <Card.Body>
            <div className="icon-wrapper">
              <img
                src={service.icon}
                alt={service.title}
                className="offer-icon"
              />
            </div>
            <Card.Title className="offer-title">{service.title}</Card.Title>
            <Card.Text className="offer-description">
              {service.description}
            </Card.Text>

            <Link to='/contact'>
            <Button
              className="offer-button"
            >
              Donate
            </Button>
            </Link>
            
            
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Ouroffers;
