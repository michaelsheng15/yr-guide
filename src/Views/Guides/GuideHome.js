import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./GuideHome.css";
import NavCard from "../../Components/NavCard";
import { Link } from "react-router-dom";

import { BiMailSend } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiError } from "react-icons/bi";
import { BiIdCard } from "react-icons/bi";

const GuideHome = () => {
  return (
    <div>
      <NavCard />

      <div className="guide-header">
        <h1>Guides</h1>
        <p>A collection of guides for your daily responsibilities.</p>
      </div>

      <Container>
        <Row className="guide-row">
          <Col sm={8}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" style={{backgroundColor:'rgba(0, 119, 255, 0.6)'}}>
                <p className="box-text" style={{color:'blue'}}>
                  Emails and Callbacks <BiMailSend />
                </p>
              </div>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="guide-box" style={{backgroundColor:'rgba(20, 173, 20, 0.6)'}}>
                <p className="box-text" style={{color:'rgb(0, 110, 0)'}}>
                  Taking Calls <BiPhoneCall />
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="guide-row">
          <Col sm={5}>
            <Link to="/ticketescalation" style={{ textDecoration: "none" }}>
              <div className="guide-box" style={{backgroundColor:'rgba(249, 67, 255, 0.63)'}}>
                <p className="box-text" style={{color:'rgb(195, 0, 202)'}}>
                  Ticket Escalation <BiIdCard />
                </p>
              </div>
            </Link>
          </Col>
          <Col sm={7}>
            <Link to="/issues" style={{ textDecoration: "none" }}>
              <div className="guide-box" style={{backgroundColor:'rgba(255, 0, 0, 0.678)'}}>
                <p className="box-text" style={{color:'rgb(184, 0, 0)'}}>
                  Common Issues and Solutions <BiError />
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuideHome;
