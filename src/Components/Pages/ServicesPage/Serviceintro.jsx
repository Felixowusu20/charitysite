
import React from "react";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import "./Serviceintro.css"; // Import styles

const Serviceintro = ({ heading, typewriterTexts }) => {
  return (
    <div className="service-hero-container">
      <div className="service-hero-content">
        <h1 className="top-text">{heading}</h1>
        <h1 style={{ color: 'orange' }} className="bottom-text">
          <Typewriter
            options={{
              strings: typewriterTexts, // Use dynamic text from props
              autoStart: true,
              delay: 50,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Serviceintro;
