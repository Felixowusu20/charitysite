import React from "react";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import "./Intro.css"; // Create this CSS file for styling

const Intro = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="top-text">Donate for a worthy cause.</h1>
        <h1 style={{color:'orange'}} className="bottom-text">
          <Typewriter
            options={{
              strings: ["Help us make lives better."], // Text to type
              autoStart: true, // Start typing automatically
              delay: 50, // Typing speed
              loop: true, // Disable looping
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Intro;