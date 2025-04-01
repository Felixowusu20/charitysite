import React from "react";
import { Button } from "react-bootstrap"; // Third-party imports first
import AutoScrollCarousel from "./AutoScrollCarousel";
import Navtab from "../../NavBar/Navtab";
import Footer from "../../Footer/Footer";
import Intro from "./Intro"; // Component imports
import "./Donate.css"; // Style imports
import { Link } from "react-router-dom";

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
      <div  className="scroll-content" style={{marginBottom:'50px'}}>

      <AutoScrollCarousel />
      </div>

      {/* Donate Button Section */}
      <div className="d-flex justify-content-center align-items-center donate-btn-container" style={{marginBottom:'50px'}}>
        <Link to='/contact'>
        <Button className="donate-btn">Donate now</Button>
        
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Donate;
