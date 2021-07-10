import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./NavCard.css";

const NavCard = () => {
  return (
    <Container>
      <Row>
        <p className="large">ITS Service Desk 🏡</p>
      </Row>
      <Row>
        <Col>
          <p className="text">Guides 📚</p>
        </Col>

        <Col>
          <p className="text">YR Apps 🛠</p>
        </Col>

        <Col>
          <p className="text">Tips 🚀</p>
        </Col>

        <Col>
          <p className="text">Resources 🧰</p>
        </Col>

        <Col>
          <p className="text">Contact 📞</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NavCard;
