import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./TicketEscalation.css";

import NavCard from "../../Components/NavCard";

const TicketEscalation = () => {
  return (
    <div>
      <NavCard />
      <div className="esc-header">
        <h1>Escalating Tickets</h1>
        <p>Essential steps in ticket escalation.</p>
      </div>

      <Container className="esc-container">
        <Row className="esc-row">
          <h3 className="esc-h">What is Ticket Escalation?</h3>

          <Col>
            <div className="esc-text">
              <p className="esc-p">
                Ticket escalation is a cross-departmental process that involves
                sending certain tickets to their appropriate departments for
                further support. As a support analyst, you are the first level
                of support for all incoming issues and it is your responsibility
                to solve or filter those tickets to the correct department.
                While it may seem easy to simply escalate any and all issues
                that you are unsure on how to solve, there is a set of rules you
                should follow to ensure tickets are appropriately escalated to
                the correct department with the correct information.
              </p>
            </div>

            <div className="terms-card">
              <h6 className="card-h">Key Terms</h6>
              <p className="esc-p">
                <strong>LSS/FSS:</strong> Field Support Specialist
              </p>
              <p className="esc-p">
                <strong> Prime and Secondary Support:</strong> Script
                terminology that indicates the main and secondary department to
                escalate application issues to.
              </p>
              <p className="esc-p">
                <strong>Ticket Routing:</strong> Script terminology to indicate
                where to escalate additional issues not listed on the script.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="esc-guide-back">
        <h3 className="esc-sub-header">Ticket Escalation Guide</h3>
        <Container className="esc-container">
          <Row className="esc-row">
            <h3 className="esc-h">#1: Deciding to Escalate</h3>

            <Col>
              <div className="esc-text">
                <p className="esc-p">
                  &#9679; Always start by connecting with the clients screen to
                  gain a better understanding of the problem
                </p>
                <p className="esc-p">
                  &#9679; Complete inital troubleshooting by accessing scripts
                  and old tickets
                </p>
                <p className="esc-p">
                  &#9679; Record all attemped solutions and their results (Ex.
                  eDOCS DMreset {">"} unsuccessful)
                </p>
                <p className="esc-p">
                  &#9679; Be detailed and concise in description of problem
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="esc-container">
          <Row className="esc-row">
            <h3 className="esc-h">
              #2: Essential Information and Escalation Location
            </h3>

            <Col>
              <div className="esc-text">
                <p className="esc-p">
                  &#9679; Record client's contact information (Phone/Extension,
                  Asset Tag)
                </p>
                <p className="esc-p">
                  &#9679; Copy and paste problem and attempted solutions into
                  analyst comments
                </p>
                <p className="esc-p">
                  &#9679; Access scripts, old tickets or the provided escalation
                  map to decide the department to escalate to.
                </p>
                <p className="esc-p">
                  &#9679; Do NOT assign the ticket to anyone. Leave the "Assign
                  to" box blank as the department will assign to a department
                  specific analyst.
                </p>
                <p className="esc-p">&#9679; Mark ticket as "Assigned"</p>
              </div>
            </Col>
            <Col>
              <div className="terms-card">
                <h6 className="card-h">Escalation Map</h6>
                <p className="esc-p">
                  Community and Health Services {">"} SC_CHS_LSS
                </p>
                <p className="esc-p">
                  Environmental {">"} SC_EnvrionmentalServices
                </p>
                <p className="esc-p">
                  Transportation {">"} SC_TransportationServices
                </p>
                <p className="esc-p">
                  CS/LCS/RapidCo/CAO/Finance/YTN{" "}
                  {">"} SC_ServiceDesk2ndLevel
                </p>
                <p className="esc-p">
                  Hardware Specific Issues {">"} SC_ServiceDesk2ndLevel
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="esc-container">
          <Row className="esc-row">
            <h3 className="esc-h">#3: After Escalating</h3>

            <Col>
              <div className="esc-text">
                <div className="esc-text">
                  <p className="esc-p">
                    &#9679; Check up on ticket to make sure it has been
                    ackowledged
                  </p>
                  <p className="esc-p">
                    &#9679; Follow-up with client on resolved tickets
                  </p>
                  <p className="esc-p">
                    &#9679; Stay updated with tickets assigned to you. Escalated
                    tickets that have been resolved may be assigned back to you
                    for you to follow-up and close
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TicketEscalation;
