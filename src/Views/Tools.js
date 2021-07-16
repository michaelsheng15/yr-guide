import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import NavCard from "../Components/NavCard";

const Tools = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Tools</h1>
        <p>Tools and applications used across York Region departments.</p>
      </div>

      <Container>
        <Row>
  
          <Card style={{ width: "14rem" }} className="card">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>
                <h3 className="tip-h">Card Title</h3>
              </Card.Title>
              <Card.Subtitle>Text</Card.Subtitle>

              <Card.Text>
                <p className="tip-p">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "14rem" }} className="card">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>
                <h3 className="tip-h">Card Title</h3>
              </Card.Title>
              <Card.Subtitle>Text</Card.Subtitle>

              <Card.Text>
                <p className="tip-p">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
     
    </div>
  );
};

export default Tools;
