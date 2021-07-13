import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Views.css";

import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";

import home1 from "../img/home3.png";

const Tips = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Helpful Tips</h1>
        <p>
          A collection of general tips to boost your productivity and
          efficiency.
        </p>
      </div>

      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#1</h3>
              <p className="tip-p">Sample</p>
            </div>
          </Col>
          <Col className="tip-img" sm={4}>
            <img src={home1} className="ig" />
          </Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row>
          <Col className="tip-col" sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#2</h3>
              <p className="tip-p">Sample</p>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row>
          <Col className="tip-col" sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#3</h3>
              <p className="tip-p">Sample</p>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row>
          <Col className="tip-col" sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#4</h3>
              <p className="tip-p">Sample</p>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row>
          <Col className="tip-col" sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#5</h3>
              <p className="tip-p">Sample</p>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tips;
