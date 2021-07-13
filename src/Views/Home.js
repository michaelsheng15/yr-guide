import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";
import { Row, Col, Container, Carousel } from "react-bootstrap";

import "./Home.css";
import home1 from "../img/home2.png";

const Home = () => {
  return (
    <div className="screen">
      <NavCard />
      <Container>
        <Row>
          <Col className="text-col">
            <h1 className="home-h">Welcome! 👋</h1>
            <p className="home-p">
              Redeployed? Co-op student? New employee? This handbook provides a
              collection of tools and resources to help you adapt quickly to
              your role as a Support Analyst{" "}
              <span className="blue"> @York Region</span>.{" "}
            </p>

            <a className="btn">Learn More!</a>
          </Col>
          <Col className="img-col">
            <img src={home1} className="img" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
