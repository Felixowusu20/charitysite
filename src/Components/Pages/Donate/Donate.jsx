import React from "react";
import { Button } from "react-bootstrap"; // Third-party imports first
import AutoScrollCarousel from "./AutoScrollCarousel";
import Navtab from "../../NavBar/Navtab";
import Footer from "../../Footer/Footer";
import Intro from "./Intro"; // Component imports
import "./Donate.css"; // Style imports

const Donate = () => {
  return (
    <>
      <Navtab />

      {/* Hero Section with Intro Component */}
      <Intro 
        heading="Donate for a worthy cause." 
        typewriterTexts={["Help us make lives better."]}
      />

      {/* Auto Scrolling Carousel */}
      <AutoScrollCarousel />

      {/* Donate Button Section */}
      <div className="d-flex justify-content-center align-items-center donate-btn-container">
        <Button className="donate-btn">Donate now</Button>
      </div>

      <Footer />
    </>
  );
};

export default Donate;
