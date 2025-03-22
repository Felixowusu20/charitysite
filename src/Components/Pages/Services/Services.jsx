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

// import leftArrow from "../../../images/site logo/brand-logo1.png";
// import rightArrow from "../../../images/site logo/brand-logo1.png";

const Services = () => {
  const services = [
    {
      id: 1,
      imgIcon: <MdCastForEducation className="service-icon" />,
      service: "Educational Scheme",
      description:
        "The Organization provides food, clothing, and shelter to these communities as an immediate solution to alleviate poverty.",
      link: "#educational",
    },
    {
      id: 2,
      imgIcon: <MdAttachMoney className="service-icon money" />,
      service: "Start-Up Capital",
      description:
        "We assist with start-up capital to help individuals in impoverished communities build sustainable livelihoods.",
      link: "#startup",
    },
    {
      id: 3,
      imgIcon: <MdOutlineGroups2 className="service-icon empowerment" />,
      service: "Youth Empowerment",
      description:
        "Empowering youth with resources, training, and mentorship to unlock their potential.",
      link: "#youth-empowerment",
    },
    {
      id: 4,
      imgIcon: <MdWorkspacesFilled className="service-icon workshop" />,
      service: "Workshops",
      description:
        "Hosting workshops to provide education and resources for personal and community growth.",
      link: "#workshop",
    },
    {
      id: 5,
      imgIcon: <MdOutlineHealthAndSafety className="service-icon health" />,
      service: "Health Scheme",
      description:
        "Providing access to healthcare and health education to promote well-being in underserved communities.",
      link: "#health-scheme",
    },
  ];

  const sliderRef = useRef(null);

  const slide = (direction) => {
    sliderRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="services-container">
      <h3 className="text-primary text-center">Our Services</h3>
      <h2 className="fw-bold mb-4 text-center">
        Give a Future Full Of Choices
      </h2>
      <div className="slider-wrapper">
        {/* <button className="arrow arrow-left" onClick={() => slide("left")}>
          <img src={leftArrow} alt="Previous" />
        </button> */}
        <div className="services-slider" ref={sliderRef}>
          {services.map((service) => (
            <div key={service.id} className="service-card-wrapper">
              <a href={service.link} className="service-card-link">
                <Card className="service-card shadow-sm">
                  <div className="card-header text-center">
                    {service.imgIcon}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-center">
                      {service.service}
                    </Card.Title>
                    <Card.Text className="s-description text-center">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </div>
        {/* <button className="arrow arrow-right" onClick={() => slide("right")}>
          <img src={rightArrow} alt="Next" />
        </button> */}
      </div>
    </div>
  );
};

export default Services;
