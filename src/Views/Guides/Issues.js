import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Issues.css";
import NavCard from "../../Components/NavCard";
import { BiMessageSquareError } from "react-icons/bi";
import { BiMessageSquareCheck } from "react-icons/bi";

const Issues = () => {
  const issues = [
    {
      issueTitle: "#1: Problem Description",
      cause:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution: ["1", "2", "3"],

      issueTitle2: "#2: Problem Description",
      cause2:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution2: ["1", "2", "3"],
    },
    {
      issueTitle: "#3: Problem Description",
      cause:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution: ["1", "2", "3"],

      issueTitle2: "#4: Problem Description",
      cause2:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution2: ["1", "2", "3"],
    },
    {
      issueTitle: "#5: Problem Description",
      cause:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution: ["1", "2", "3"],

      issueTitle2: "#6: Problem Description",
      cause2:
        "Ticket escalation is a cross-departmental process that involves sending certain tickets to their appropriate departments for further support.",
      solution2: ["1", "2", "3"],
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="issues-header">
        <h1>Common Issues and Solutions</h1>
        <p>Sample</p>
      </div>

      {issues.map(
        (
          { issueTitle, issueTitle2, cause, cause2, solution, solution2 },
          i
        ) => (
          <Container className="issues-container">
            <Row className="issues-row">
              <Col>
                <div className="issues-text-box" key={i}>
                  <h3 className="issues-h">{issueTitle}</h3>
                  <h3 className="issues-sub-h">
                    <BiMessageSquareError /> Cause:
                  </h3>

                  <p className="issues-p">{cause}</p>
                  <h3 className="issues-sub-h">
                    <BiMessageSquareCheck /> Solution:
                  </h3>

                  <p className="issues-p">
                    <ol>
                      {solution.map((solution, j) => (
                        <li key={j}>{solution}</li>
                      ))}
                    </ol>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="issues-text-box">
                  <h3 className="issues-h">{issueTitle2}</h3>
                  <h3 className="issues-sub-h">
                    <BiMessageSquareError /> Cause:
                  </h3>

                  <p className="issues-p">{cause2}</p>
                  <h3 className="issues-sub-h">
                    <BiMessageSquareCheck /> Solution:
                  </h3>

                  <p className="issues-p">
                    <ol>{solution2.map((solution, j) => (
                        <li key={j}>{solution}</li>
                      ))}</ol>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        )
      )}
    </div>
  );
};

export default Issues;
