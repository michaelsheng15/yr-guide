import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className='footer-container'>
      <Row>
        <p className="text">Created by Michael Sheng. &copy; 2021</p>
      </Row>
      <Row>
        <Col>
        {/* Place links and icons here */}
        </Col>

      </Row>
    </Container>
  );
};

export default Footer;
