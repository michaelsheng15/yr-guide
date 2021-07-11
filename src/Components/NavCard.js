import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./NavCard.css";
import { Link } from "react-router-dom";

const NavCard = () => {
  return (
    <Container className="nav-container">
      <Row>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <p className="large">ITS Handbook 🚀</p>
        </Link>
      </Row>
      <Row>
        <Col>
          <Link to="/guides" style={{ textDecoration: "none" }}>
            <p className="text">Guides 📚</p>
          </Link>
        </Col>

        <Col>
          <Link to="/tools" style={{ textDecoration: "none" }}>
            <p className="text">Tools 🛠</p>
          </Link>
        </Col>

        <Col>
          <Link to="/tips" style={{ textDecoration: "none" }}>
            <p className="text">Helpful Tips 💡</p>
          </Link>
        </Col>

        <Col>
          <Link to="/resources" style={{ textDecoration: "none" }}>
            <p className="text">Resources 🧰</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NavCard;
