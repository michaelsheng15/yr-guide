import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Emails.css";

import NavCard from "../../Components/NavCard";
import { BiDetail } from "react-icons/bi";

const Emails = () => {
  return (
    <div>
      <NavCard />
      <div className="mail-header">
        <h1>Tickets and Emails</h1>
        <p>Sample</p>
      </div>

      {/* Emails Section */}

      <Container className="mail-container">
        <Row className="mail-row">
          <h3 className="mail-h">What are Tickets?</h3>
          <Col>
            <div>
              <p className="mail-p">
                A ticket is a capsule of information regarding a client's issue
                and it is a way to track critical information and progress.
                Creating tickets is an essential part of your responsibilities and
                provided is a guide outlining each different section of a
                ticket, the information it should include and helpful tips to
                create effective tickets.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mail-guide-back">
        <h3 className="mail-sub-header">
          Ticket Creation Guide <BiDetail />
        </h3>
        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#1: Name Section</h3>

            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="mail-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="mail-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="mail-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#2: Description</h3>

            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Record client's contact information (Phone/Extension,
                  Asset Tag)
                </p>
                <p className="mail-p">
                  &#9679; Copy and paste problem and attempted solutions into
                  analyst comments
                </p>
                <p className="mail-p">
                  &#9679; Access scripts, old tickets or the provided escalation
                  map to decide the department to escalate to.
                </p>
                <p className="mail-p">
                  &#9679; Do NOT assign the ticket to anyone. Leave the "Assign
                  to" box blank as the department will assign to a department
                  specific analyst.
                </p>
                <p className="mail-p">&#9679; Mark ticket as "Assigned"</p>
              </div>
            </Col>
            <Col>
              <div className="mail-card">
                <h6 className="card-h">Escalation Map</h6>
                <p className="mail-p">
                  Community and Health Services {">"} SC_CHS_LSS
                </p>
                <p className="mail-p">
                  Environmental {">"} SC_EnvrionmentalServices
                </p>
                <p className="mail-p">
                  Transportation {">"} SC_TransportationServices
                </p>
                <p className="mail-p">
                  CS/LCS/RapidCo/CAO/Finance/YTN {">"} SC_ServiceDesk2ndLevel
                </p>
                <p className="mail-p">
                  Hardware Specific Issues {">"} SC_ServiceDesk2ndLevel
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#3: Apply Template and Adjust</h3>
            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="mail-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="mail-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="mail-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <hr></hr>
      {/* Tickets Section */}

      <Container className="mail-container">
        <Row className="mail-row">
          <h3 className="mail-h">Monitoring the ITS Inbox</h3>
          <Col>
            <div>
              <p className="mail-p">
                The ITS inbox is a shared inbox across the entire ITS team where
                dozens of issues and requests appear. As a support analyst,
                monitoring and taking emails is a key responsibility. While each
                email will be different, provided is an algorithmic guide
                developed from my own experience.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="mail-guide-back">
        <h3 className="mail-sub-header">
          Emails Guide <BiDetail />
        </h3>
        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#1: Take emails and organize inbox</h3>

            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="mail-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="mail-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="mail-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">
              #2: Create ticket and brainstorm solutions
            </h3>

            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Record client's contact information (Phone/Extension,
                  Asset Tag)
                </p>
                <p className="mail-p">
                  &#9679; Copy and paste problem and attempted solutions into
                  analyst comments
                </p>
                <p className="mail-p">
                  &#9679; Access scripts, old tickets or the provided escalation
                  map to decide the department to escalate to.
                </p>
                <p className="mail-p">
                  &#9679; Do NOT assign the ticket to anyone. Leave the "Assign
                  to" box blank as the department will assign to a department
                  specific analyst.
                </p>
                <p className="mail-p">&#9679; Mark ticket as "Assigned"</p>
              </div>
            </Col>
            <Col>
              <div className="mail-card">
                <h6 className="mail-card-h">Escalation Map</h6>
                <p className="mail-p">
                  Community and Health Services {">"} SC_CHS_LSS
                </p>
                <p className="mail-p">
                  Environmental {">"} SC_EnvrionmentalServices
                </p>
                <p className="mail-p">
                  Transportation {">"} SC_TransportationServices
                </p>
                <p className="mail-p">
                  CS/LCS/RapidCo/CAO/Finance/YTN {">"} SC_ServiceDesk2ndLevel
                </p>
                <p className="mail-p">
                  Hardware Specific Issues {">"} SC_ServiceDesk2ndLevel
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#3: Schedule and complete callback</h3>
            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="mail-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="mail-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="mail-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mail-container">
          <Row className="mail-row">
            <h3 className="mail-h">#4: Update and close ticket</h3>
            <Col>
              <div>
                <p className="mail-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="mail-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="mail-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="mail-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Emails;
