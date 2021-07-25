import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Calls.css";

import { BiBookBookmark } from "react-icons/bi";

import NavCard from "../../Components/NavCard";
import { BiDetail } from "react-icons/bi";

const Calls = () => {
  const callsGuide = [
    {
      title: "#1: Introduction and Problem",
      tips: [
        "Answer the call with a polite greeting ('IT Service Desk, this is [name] speaking')",
        "Listen carefully to clients problem and take note of important details in ticket description (Error messages, affected applications, common issues)",
      ],
    },
    {
      title: "#2: Essential Follow-Up Questions",
      tips: [
        "It is important to ask questions to gain a better understanding of the issue and to help find a solution",
        "refer to list of essential questions that you should ask in every call",
      ],
      container: (
        <Col sm={5}>
          <div className="calls-card">
            <h6 className="card-h">Essential Questions</h6>
            <p className="mail-p">Asset tag number?</p>
            <p className="mail-p">Working from home or office?</p>
            <p className="mail-p">Connected to VPN?</p>
            <p className="mail-p">
              Have you experienced these issues in the past?
            </p>
          </div>
        </Col>
      ),
    },
    {
      title: "#3: Solution Brainstorm and Connecting with Client",
      tips: [
        "Depending on the complexity of the issue, you can put the client on hold or inform the client to give you a moment for you to brainstorm solutions",
        "Often times it is easier to connect with client first and then brainstorm solutions so you have a better understanding of the issue at hand",
        "Look through old tickets and scripts to find possible solutions and ask for help if you cannot find any possible solutions",
      ],
    },
    {
      title: "#4: Execute Possible Solutions",
      tips: [
        "Take your time and thoroughly test each solution",
        "Once a solution seems to be successful, run some tests to ensure completions (Ex. restart application, sign out and sign back in, restart computer))",
      ],
    },
    {
      title: "Successful?",
      tips: [
        "End call with a polite farewell",
        "Update ticket with successful solution and close ticket",
      ],
    },
    {
      title: "Unsuccessful?",
      tips: [
        "Reach out to coworkers for help",
        "Ask additional questions and complete more tests in an attempt to determine cause of issue",
        "Schedule a callback with client to give yourself more time to find a solution",
        "When appropriate, escalate to second level support (Refer to escalation guide)",
      ],
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="calls-header">
        <h1>Taking Calls</h1>
        <p>Guide to monitoring the IT Phone Queue</p>
      </div>

      <Container className="calls-container">
        <Row className="calls-row">
          <h3 className="esc-h">An Algorithmic Approach to Taking Calls</h3>
          <Col>
            <div>
              <p className="calls-p">
                The IT phone queue is the primary form of communication between
                IT and York Region employees. Queue calls are generally much
                more urgent than emails so monitoring the queue and taking calls
                efficiently is a priority. Every call will contain unique variables however there is a common foundation that every call follows.
              </p>
            </div>
            <div className="calls-tip-card">
              <h6 className="card-h">
                Tips and Reminders <BiBookBookmark />
              </h6>
              <p className="esc-p">
                <strong>Be respectful and professional:</strong> <br />
                Reagrdless of how you are being treated by a client, always be
                polite, respectful and professional.
              </p>
              <p className="esc-p">
                <strong> Take your time and stay calm:</strong> <br />
                Calls can take anywhere from 5-30 minutes. Take your time to
                thoroughly attempt solutions and remain call to improve your
                efficiency and adaptability.
              </p>
              <p className="esc-p">
                <strong>Inform client before closing apps/restarting:</strong>{" "}
                <br />
                Ending tasks and restarts are very common. Remember to inform
                clients beforehand so they can save their work/files.
              </p>
              <p className="esc-p">
                <strong>Don't be afraid to ask for help:</strong> <br />
                As a new employee, getting stuck during calls is very common. Do
                not be afriad to ask your workers or follow co-op students for
                help.
              </p>
              <p className="esc-p">
                <strong>Be aware of phone queue status:</strong> <br />
                After finishing a call, you have 60 seconds to finish up your work before you go on "Ready" again. If you need more time, put yourself on "Not Ready".
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="calls-guide-back">
        <h3 className="calls-sub-header">
          Phone Call Guide <BiDetail />
        </h3>
        <Container className="calls-container">
          {callsGuide.map(({ title, tips, script, container }) => (
            <Row className="calls-row">
              <h3 className="calls-h">{title}</h3>

              <Col>
                <ul className="mail-ul">
                  {tips.map((tip) => (
                    <li className="mail-p">{tip}</li>
                  ))}
                </ul>
                {script}
              </Col>
              {container}
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Calls;
