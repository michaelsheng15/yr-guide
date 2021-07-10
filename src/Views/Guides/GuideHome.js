import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./GuideHome.css";
import NavCard from "../../Components/NavCard";
import Footer from "../../Components/Footer"

import { Link } from "react-router-dom";

const GuideHome = () => {
  return (
    <div className='screen'>
      <NavCard />

      <div className="header">
        <h1>Guides</h1>
        <p>Sample text</p>
      </div>

      <Container className="guide-Container">
        <Row className="guide-row">
          <Col sm={8}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" id="email">
                <p className="box-text">Emails and Callbacks</p>
              </div>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" id="phone">
                <p className="box-text">Phone Queue</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="guide-row">
          <Col sm={4}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" id="esc">
                <p className="box-text">Ticket Escalation</p>
              </div>
            </Link>
          </Col>
          <Col sm={8}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" id="common">
                <p className="box-text">Common Issues and Solutions</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuideHome;
