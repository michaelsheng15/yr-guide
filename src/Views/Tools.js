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
      description2: "Request system for all non CHS, ENV and TRN employees.",
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
        "A directory of all York Region accounts used to view account status, reset password, view security groups and more.",
      button: "Learn more",

      title2: "Cisco Finesse",
      description2:
        "An agent integrated with your softphone where you set your work status, monitor the phone queue and view call statistics.",
      button2: "Learn more",
    },
    {
      title: "Dell Knowledge Base",
      description:
        "A database of technical support articles and guides for Dell computers, mainly used in driver installation and updates.",
      button: "Learn more",

      title2: "GoToSupport",
      description2:
        "An external support tool used to view and control a clients screen. Can be used when client is not connected to York Region network",

      button2: "Learn more",
    },
    {
      title: "Service Manager",
      description:
        "An application used to create, monitor and escalate incident tickets.",
      button: "Learn more",

      title2: "RC Viewer",
      description2:
        "An internal support tool used to control a clients screen. Can only be used when client is connected to York Region network.",
      button2: "Learn more",
    },
  ];

  const apps = [
    {
      title: "Cisco AnyConnect Client",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "Cisco IP Communicator",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
    {
      title: "Citrix",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "FTP Service",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",

      button2: "Learn more",
    },
    {
      title: "Microsoft Teams",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "Outlook",
      description2:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button2: "Learn more",
    },
    {
      title: "ROSIE",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Learn more",

      title2: "ROSIE",
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
