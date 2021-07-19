import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Issues.css";

import NavCard from "../../Components/NavCard";
import { BiMessageSquareError } from "react-icons/bi";
import { BiMessageSquareCheck } from "react-icons/bi";

const Issues = () => {
  return (
    <div>
      <NavCard />
      <div className="issues-header">
        <h1>Common Issues and Solutions</h1>
        <p>Sample</p>
      </div>

      <Container className="issues-container">
        <Row className="issues-row">
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#1: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">
                Ticket escalation is a cross-departmental process that involves
                sending certain tickets to their appropriate departments for
                further support.
              </p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>Coffee</li>
                </ol>
              </p>
            </div>
          </Col>
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#2: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">
                Ticket escalation is a cross-departmental process that involves
                sending certain tickets to their appropriate departments for
                further support.
              </p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>Coffee</li>
                </ol>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="issues-container">
        <Row className="issues-row">
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#3: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">
                Ticket escalation is a cross-departmental process that involves
                sending certain tickets to their appropriate departments for
                further support.
              </p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>
                    Ticket escalation is a cross-departmental process that
                    involves sending certain tickets to their appropriate
                    departments for further support.
                  </li>
                </ol>
              </p>
            </div>
          </Col>
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#4: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">Ticket</p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>Coffee</li>
                </ol>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="issues-container">
        <Row className="issues-row">
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#5: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">
                Ticket escalation is a cross-departmental process that involves
                sending certain tickets to their appropriate departments for
                further support.
              </p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>
                    Ticket escalation is a cross-departmental process that
                    involves sending certain tickets to their appropriate
                    departments for further support.
                  </li>
                </ol>
              </p>
            </div>
          </Col>
          <Col>
            <div className="issues-text-box">
              <h3 className="issues-h">#6: Problem Description</h3>
              <h3 className="issues-sub-h">
                <BiMessageSquareError /> Cause:
              </h3>

              <p className="issues-p">Ticket</p>
              <h3 className="issues-sub-h">
                <BiMessageSquareCheck /> Solution:
              </h3>

              <p className="issues-p">
                <ol>
                  <li>Coffee</li>
                </ol>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Issues;
