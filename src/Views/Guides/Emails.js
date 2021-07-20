import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Emails.css";

import NavCard from "../../Components/NavCard";
import { BiBookBookmark } from "react-icons/bi";
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
          <h3 className="esc-h">What are Tickets?</h3>
          <Col>
            <div>
              <p className="mail-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          <h3 className="esc-h">Monitoring the ITS Inbox</h3>
          <Col>
            <div>
              <p className="mail-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <h3 className="mail-h">
              #1: Drag Desired Email into Personal Inbox
            </h3>

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
              #2: Create Ticket and Brainstorm Possible Solutions
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
            <h3 className="mail-h">#3: Schedule and Complete Callback</h3>
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
            <h3 className="mail-h">#4: Update and Close Ticket</h3>
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
            <h3 className="mail-h">Helpful Tips and Tricks</h3>
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
