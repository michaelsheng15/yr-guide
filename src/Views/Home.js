import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavCard />
      <Container>
        <Row>
          <Col sm={7} className="text-col">
            <h1>Welcome!</h1>
            <p>
              Here you will find a collection of guides, tutorials and resources
              to ensure your success as a Support Analyst{" "}
              <span className="blue"> @ York Region</span>.
            </p>
            <a className="btn">Learn More!</a>
          </Col>
          <Col sm={5} className="img-col">
            <Carousel nextLabel="" prevLabel="">
              <Carousel.Item className="slide-container" interval={3000}>
                <Carousel.Caption>
                  <h1>Slide 1</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slide-container" interval={3000}>
                <Carousel.Caption>
                  <h1>Slide 2</h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slide-container" interval={3000}>
                <Carousel.Caption>
                  <h1>Slide 3</h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Footer />

      
    </div>
  );
};

export default Home;
