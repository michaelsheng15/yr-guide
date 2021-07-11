import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";
import { Row, Col, Container, Carousel } from "react-bootstrap";

import "./Home.css";
import home1 from "../img/home2.png";
import home2 from "../img/home1.jpeg";

const Home = () => {

  
  return (
    <div>
      <NavCard />
      <Container>
        <Row>
          <Col className="text-col">
            <h1 className='home-h'>Welcome! 👋</h1>
            <p className='home-p'>
              Here you will find a collection of guides, tutorials and resources
              to ensure your success as a Support Analyst{" "}
              <span className="blue"> @York Region</span>.
            </p>
            <a className="btn">Learn More!</a>
          </Col>
          <Col className="img-col">
            <Carousel nextLabel="" prevLabel="" nextIcon={""}>
              <Carousel.Item className="slide-container">
                <img src={home1} className="img" />
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
