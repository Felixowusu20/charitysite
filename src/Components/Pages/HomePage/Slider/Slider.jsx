import Carousel from "react-bootstrap/Carousel";
import myImage1 from '/src/images/children1.jpg';
import myImage2 from '/src/images/children2.jpg';
import myImage3 from '/src/images/children3.jpg';


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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h3 className="text-danger">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
