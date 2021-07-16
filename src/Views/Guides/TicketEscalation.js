import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./TicketEscalation.css";

import NavCard from "../../Components/NavCard";

const TicketEscalation = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Escalating Tickets</h1>
        <p>What, why, when and how.</p>
      </div>

      <Container>
        <Row className="esc-row">
          <Col>
            <div>
              <h3 className="tip-h">What is Ticket Escalation?</h3>
              <p className="tip-p">
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
              <div className="terms-card">
                <h6 className="card-h">Key Terms</h6>
                <p className="tip-p">
                  <strong>LSS/FSS:</strong> Field Support Specialist
                </p>
                <p className="tip-p">
                  <strong> Prime and Secondary Support:</strong> Script
                  terminology that indicates the main and secondary department
                  to escalate application issues to.
                </p>
                <p className="tip-p">
                  <strong>Ticket Routing:</strong> Script terminology to
                  indicate how escalated tickets are routed depending on
                  application and issue
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="container-stack">
        <Row className="esc-row">
          <Col>
            <div>
              <h3 className="tip-h">Deciding When to Escalate.</h3>
              <p className="tip-p">
                Deciding when to escalate is a skill that only comes with
                practice. As you take more emails and calls, you become more
                familiar with certain applications, repeated issues and patterns
                that make it easy to decide when to escalate. Before we look
                into when you should escalate, there are some terms you should
                be familiar with that will be helpful during this process. While
                each ticket has its own unique variables, there are a few
                telltale signs on when you should be escalating an issue.
              </p>
              <div className="terms-card">
                <h6 className="card-h">Escalation Checklist</h6>
                <p className="tip-p">
                  <strong>Pattern of escalation in old IR tickets:</strong>
                </p>
                <p className="tip-p">
                  <strong>
                    Department specific applications, tools and privileges:
                  </strong>
                </p>
                <p className="tip-p">
                  <strong>Scripts Ticket Routing/Prime:</strong>
                </p>
                <p className="tip-p">
                  <strong>Getting Stuck for Prolonged Period of Time:</strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="test">
        <Row className="esc-row">
          <Col>
            <div>
              <h3 className="tip-h">Effectively Escalating Tickets.</h3>
              <p className="tip-p">
                When Dealing with a challenging issue, here is a checklist you
                can use to ensure no mistakes are made during the
                escalation/troubleshooting process
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="card-row">
          <Col>
            <p>testing</p>
          </Col>
          <Col>
            <p>testing</p>
          </Col>
          <Col>
            <p>testing</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketEscalation;
