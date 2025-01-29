import React, { useEffect } from "react";
import banner from "../../../../images/Banner/banner.jpg";
import background from "../../../../images/Banner/background.jpg";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      anchorPlacement: "top-center",
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="banner-overlay"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="banner-content">
        <div className="text-content" data-aos="fade-up">
          <h1 className="banner-heading">Be the Change for One Child’s Life</h1>
          <p className="banner-paragraph">
            Every child deserves the chance to thrive. A single act of kindness
            can unlock a future of hope and opportunity.
          </p>
          <p className="banner-paragraph">
            Your impact transforms lives. Be the foundation of a brighter
            tomorrow for one child.
          </p>
        </div>
        <div className="image-content" data-aos="fade-left">
          <img src={banner} alt="Banner" className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
