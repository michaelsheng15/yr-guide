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
        "A VPN client used to connect to York Region network to access regional tools and applications.",
      button: "Learn more",

      title2: "Cisco IP Communicator",
      description2:
        "A desktop phone that can be used to communicate with internal regional employees and external callers.",
      button2: "Learn more",
    },
    {
      title: "Citrix",
      description:
        "A desktop client used to access York Region tools and applications without connecting to regional network.",
      button: "Learn more",

      title2: "FTP Service",
      description2:
        "An online service used to send large files over emails that exceed Outlook attachment size limits.",

      button2: "Learn more",
    },
    {
      title: "InforXM",
      description:
        "An online tool used by York Region employees to submit forms for reinbursable expenses.",
      button: "Learn more",

      title2: "Microsoft Teams",
      description2:
        "The main method of communication with coworkers through private messaging and team meetings.",
      button2: "Learn more",
    },
    {
      title: "Outlook",
      description:
        "Primary email application for all York Region employees.",
      button: "Learn more",

      title2: "ROSIE",
      description2:
        "A self-service tools used to view employee information, payroll benefits, online courses and more.",
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
