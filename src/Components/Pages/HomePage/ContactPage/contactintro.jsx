
import React from "react";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import "./Contactintro.css"; // Import styles

const Contactintro = ({ heading, typewriterTexts }) => {
  return (
    <div className="contact-hero-container">
      <div className="contact-hero-content">
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

export default Contactintro;
