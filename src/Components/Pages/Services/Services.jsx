import React, { useRef } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import {
  MdAttachMoney,
  MdCastForEducation,
  MdOutlineGroups2,
  MdWorkspacesFilled,
  MdOutlineHealthAndSafety,
} from "react-icons/md";

import leftArrow from "../../../images/site logo/brand-logo1.png";
import rightArrow from "../../../images/site logo/brand-logo1.png";

const Services = () => {
  const services = [
    {
      id: 1,
      imgIcon: (
        <MdCastForEducation style={{ fontSize: "2.5rem", color: "#007bff" }} />
      ),
      service: "Educational Scheme",
      description:
        "The Organization provides food, clothing, and shelter to these communities as an immediate solution to alleviate poverty.",
      link: "#educational",
    },
    {
      id: 2,
      imgIcon: (
        <MdAttachMoney style={{ fontSize: "2.5rem", color: "#28a745" }} />
      ),
      service: "Start-Up Capital",
      description:
        "We assist with start-up capital to help individuals in impoverished communities build sustainable livelihoods.",
      link: "#startup",
    },
    {
      id: 3,
      imgIcon: (
        <MdOutlineGroups2 style={{ fontSize: "2.5rem", color: "#ffc107" }} />
      ),
      service: "Youth Empowerment",
      description:
        "Empowering youth with resources, training, and mentorship to unlock their potential.",
      link: "#youth-empowerment",
    },
    {
      id: 4,
      imgIcon: (
        <MdWorkspacesFilled style={{ fontSize: "2.5rem", color: "#17a2b8" }} />
      ),
      service: "Workshops",
      description:
        "Hosting workshops to provide education and resources for personal and community growth.",
      link: "#workshop",
    },
    {
      id: 5,
      imgIcon: (
        <MdOutlineHealthAndSafety
          style={{ fontSize: "2.5rem", color: "#dc3545" }}
        />
      ),
      service: "Health Scheme",
      description:
        "Providing access to healthcare and health education to promote well-being in underserved communities.",
      link: "#health-scheme",
    },
  ];

  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="services-container">
      <h3 className="text-primary">Services</h3>
      <h2 className="fw-bold mb-3">Give a Future Full Of Choices</h2>
      <div className="slider-wrapper">
        <img
          className="arrow arrow-left"
          src={leftArrow}
          alt="Previous"
          onClick={slideLeft}
        />
        <div className="services-slider" ref={sliderRef}>
          {services.map((service) => (
            <div key={service.id} className="service-card-wrapper">
              <a href={service.link} className="service-card-link">
                <Card className="service-card shadow-sm">
                  <div className="card-header text-center">
                    {service.imgIcon}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {service.service}
                    </Card.Title>
                    <Card.Text className="s-description">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </div>
        <img
          className="arrow arrow-right"
          src={rightArrow}
          alt="Next"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Services;
