import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Artboard1 from "../../images/Artboard1.png";
import Artboard2 from "../../images/Artboard2.png";
import Artboard3 from "../../images/Artboard3.png";
import "../../styles.css";

const Landing = () => {
  return (
    <Carousel
      slide={false}
      fade={false}
      style={{
        margin: "0 auto",
        boxShadow: "10px 10px 10px black",
      }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={Artboard1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Artboard2} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Artboard3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Landing;
