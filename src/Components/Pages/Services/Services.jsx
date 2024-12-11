import React, { useRef } from "react";
import "./Services.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// we will replace with the appropirate images
import educationalIcon from "../../../images/site logo/brand-logo1.png";
import startupIcon from "../../../images/site logo/brand-logo1.png";
import youthEmpowermentIcon from "../../../images/site logo/brand-logo1.png";
import workshopIcon from "../../../images/site logo/brand-logo1.png";
import healthSchemeIcon from "../../../images/site logo/brand-logo1.png";
import leftArrow from "../../../images/site logo/brand-logo1.png";
import rightArrow from "../../../images/site logo/brand-logo1.png";

const Services = () => {
  const services = [
    {
      id: 1,
      imgIcon: educationalIcon,
      service: "Educational Scheme",
      description:
        "The Organization provides food, clothing, and shelter to these communities as an immediate solution to alleviate poverty.",
      link: "#educational",
    },
    {
      id: 2,
      imgIcon: startupIcon,
      service: "Start-Up Capital",
      description:
        "We assist with start-up capital to help individuals in impoverished communities build sustainable livelihoods.",
      link: "#startup",
    },
    {
      id: 3,
      imgIcon: youthEmpowermentIcon,
      service: "Youth Empowerment",
      description:
        "Empowering youth with resources, training, and mentorship to unlock their potential.",
      link: "#youth-empowerment",
    },
    {
      id: 4,
      imgIcon: workshopIcon,
      service: "Workshops",
      description:
        "Hosting workshops to provide education and resources for personal and community growth.",
      link: "#workshop",
    },
    {
      id: 5,
      imgIcon: healthSchemeIcon,
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
                  <div className="card-header">
                    <img
                      src={service.imgIcon}
                      alt={`${service.service} Icon`}
                      className="service-icon"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {service.service}
                    </Card.Title>
                    <Card.Text className= "s-dectiption">{service.description}</Card.Text>
                    {/* <Button variant="primary">Learn More</Button> */}
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
