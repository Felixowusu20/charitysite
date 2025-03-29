import Carousel from "react-bootstrap/Carousel";
import myImage1 from "/src/images/children1.jpg";
import myImage4 from "/src/images/children4.jpg";
import myImage3 from "/src/images/children3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./slider.css";

function Slider() {
  return (
    <Carousel fade interval={4000} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={myImage1}
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Compassion in Action</h3>
          <p>Together, We Can Make a Difference</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={myImage4}
          alt="Second slide"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Lifting Lives, Inspiring Change</h3>
          <p>Giving hope to the less privileged and making a change for a better tomorrow</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={myImage3}
          alt="Third slide"
        />
        <Carousel.Caption className="custom-caption">
          <h3>Because Every Life Matters</h3>
          <p>Join hands and spread kindness. Small acts, big impacts.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
