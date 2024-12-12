import Carousel from "react-bootstrap/Carousel";
import myImage1 from '/src/images/children1.jpg';
import myImage2 from '/src/images/children2.jpg';
import myImage3 from '/src/images/children3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage1} // Replace with your first image URL
          alt="First slide"
          height="600px"

        />
        <Carousel.Caption>
          <h3 className="text-danger text-uppercase fs-1">Compassion in Action</h3>
          <p className="fs-3">Together, We Can Make a Difference</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage2} // Replace with your second image URL
          alt="Second slide"
          height="600px"

        />
        <Carousel.Caption>
          <h3 className="text-danger text-uppercase fs-1">Lifting Lives, Inspiring Change</h3>
          <p className="fs-3">Giving hope to the less privileged and making a change for a better tomorrow</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage3} // Replace with your third image URL
          alt="Third slide"
          height="600px"
        />
        <Carousel.Caption>
          <h3 className="text-uppercase text-danger fs-1">Because Every Life Matters</h3>
          <p className="fs-3">
            Join hands and spread kindness. Small acts, big impacts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
