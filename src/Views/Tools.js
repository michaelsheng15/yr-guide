import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import NavCard from "../Components/NavCard";

import "./Tools.css";
import { BiGitPullRequest } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";

const Tools = () => {
  const request = [
    {
      title: "E-Request",
      description:
        "Request system for environment and transportation employees.",
      button: "Go to request",

      title2: "ITSR/Jira",
      description2: "Request system for",
      button2: "Go to request",
    },
    {
      title: "Mobile Device Request",
      description:
        "Request system for environment and transportation employees.",
      button: "Go to request",

      title2: "MyTechSupport",
      description2: "Request system for CHS employees",
      button2: "Go to request",
    },
  ];

  const IT = [
    {
      title: "Active Directory",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "Cisco Unity",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
    {
      title: "Dell Knowledge Base",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "GoToSupport",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",

      button2: "Learn more",
    },
    {
      title: "Service Manager",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "RC Viewer",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
  ];

  const apps = [
    {
      title: "Active Directory",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "Cisco Finesse",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
    {
      title: "Dell Knowledge Base",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "GoToSupport",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",

      button2: "Learn more",
    },
    {
      title: "Service Manager",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "RC Viewer",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="tools-header">
        <h1>Tools</h1>
        <p>An overview of the common tools and applications used across York Region.</p>
      </div>

      <Container className="tools-container">
        <div className='tools-div'>
          <h3 className="tools-sub-header">
            Request Systems <BiGitPullRequest />
          </h3>
          {request.map((e) => (
            <Row className="tools-row">
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <Button variant="primary">{e.button}</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title2}</Card.Title>
                    <Card.Text>{e.description2}</Card.Text>
                    <Button variant="primary">{e.button2}</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <hr />

      <Container className="tools-container">
        <div>
          <h3 className="tools-sub-header">
            IT Exclusive Tools <BiCube />
          </h3>

          {IT.map((e) => (
            <Row className="tools-row">
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <Button variant="primary">{e.button}</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title2}</Card.Title>
                    <Card.Text>{e.description2}</Card.Text>
                    <Button variant="primary">{e.button2}</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>

      <hr />

      <Container className="tools-container">
        <div>
          <h3 className="tools-sub-header">
            York Region Applications <BiCollection />
          </h3>
          {apps.map((e) => (
            <Row className="tools-row">
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <Button variant="primary">{e.button}</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>{e.title2}</Card.Title>
                    <Card.Text>{e.description2}</Card.Text>
                    <Button variant="primary">{e.button2}</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tools;
