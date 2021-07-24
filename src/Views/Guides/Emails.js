import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Emails.css";
import NavCard from "../../Components/NavCard";
import { BiDetail } from "react-icons/bi";

import email1 from "../../img/e1.png";
import email2 from "../../img/e2.png";
import email3 from "../../img/e3.png";
import email4 from "../../img/e4.png";
import email6 from "../../img/email6.png";

const Emails = () => {
  const ticketGuide = [
    {
      title: <h3 className="mail-h">Section 1: Name and Title </h3>,
      tips: [
        "Format is lastname, firstname",
        "Keep title concise (my preferred title format is Asset Tag - Problem Statement/Error Message - Contact Information)",
      ],
      container: undefined,
      img: email1,
    },
    {
      title: <h3 className="mail-h">Section 2: Description</h3>,
      tips: [
        "Brainstorm possible solutions and mark each solution with result (successful/unsuccessful)",
        "Treat as your personal notepad and jot down any important notes, contact information or answers to your follow-up questions",
      ],
      container: undefined,
      bold: [
        "Emails: Copy and paste email and surround with brackets",
        "Calls: Jot down important notes while client isdescribing issue",
      ],
      img: email2,
    },
    {
      title: (
        <h3 className="mail-h">
          Section 3: Adding Template and Additional Information
        </h3>
      ),
      tips: [
        "Correct the auto-filled template to fit your situation",
        "You can find the department the client works in by accessing the \"York Customizations\" tab",
        "Assign the ticket to yourself and assign the department as SC_ServiceDesk",
      ],
      container: (
        <Col>
          <div className="mail-card">
            <h6 className="card-h">Common Departments</h6>
            <p className="mail-p">
              <b>SC_ServiceDesk2ndLevel:</b> Hardware and OS
            </p>
            <p className="mail-p">
              <b>SC_Network:</b> Drives and data services
            </p>
            <p className="mail-p">
              <b>SC_eDOCS:</b> account access and eDOCS{" "}
            </p>
            <p className="mail-p">
              <b>SC_Blackberry{"&"}Cellular:</b> Mobile phones
            </p>
          </div>
        </Col>
      ),

      bold: undefined,
      img: email3
    },
    {
      title: <h3 className="mail-h">Section 4: Affected Items and Comments</h3>,
      tips: [
        "Enter the asset tag number of the affected devices",
        "General hardware such as docking stations and monitors can be found under the category Hardware Asset",
        "Comments is where you can communicate with other analysts when esclating and aim to treat is as a progress tracker where you add comments during certain milestones",
      ],
      container: undefined,
      bold: undefined,
      img: email4,
    },
    {
      title: <h3 className="mail-h">Section 5: Resolution</h3>,
      tips: [
        "Resolution category will only be accessible after closing the ticket",
        "Determine the appropriate resolution category and input solution in resolution box",
      ],
      container: undefined,
      img: email6,
    },
  ];

  const mailGuide = [
    {
      title: <h3 className="mail-h">#1: Take emails and organize inbox</h3>,
      tips: [
        "Drag emails from ITS inbox into your personal inbox (Items Taken By...)",
        "Keep inbox organized and mark ongoing emails with flags",
      ],
      container: undefined,
      bold:<b>TIP: Challenge yourself and look for emails containing unique issues</b>
    },
    {
      title: (
        <h3 className="mail-h">#2: Create ticket and brainstorm solutions</h3>
      ),
      tips: [
        "See above guide on ticket creation",
        "Access scripts, internal and external resources to brainstorm a list of possible solutions",
      ],
      container: undefined,
      bold: <b>STATUS: Mark ticket as "Work in Progress"</b>,
    },
    {
      title: <h3 className="mail-h">#3: Schedule and complete callback</h3>,
      tips: [
        "Send email back to client asking for availability and contact info",
        "Connect with client’s screen and attempt possible solutions (See escalation guide and escalate if appropriate)",
      ],
      container: undefined,
      bold: <b>STATUS: Mark ticket as "Waiting on Customer"</b>,
    },
    {
      title: <h3 className="mail-h">#4: Update and close ticket</h3>,
      tips: [
        "Identify successful solution",
        "Update ticket with contact info and asset tag number",
        "Fill in resolution with successful solution and select resolution type",
        "Mark email with a checkmark",
      ],
      container: undefined,
      bold: <b>STATUS: Mark ticket as "Closed"</b>,
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="mail-header">
        <h1>Tickets and Emails</h1>
        <p>Creating effective tickets and efficiently taking emails</p>
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
                Creating tickets is an essential part of your responsibilities
                and provided is a guide outlining each different section of a
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
          {ticketGuide.map(({ title, tips, container, img }, i) => (
            <Row className="mail-row">
              {title}
              <div className='mail-img-div'>
                <img src={img}/>
              </div>

              <Col>
                <ol className="mail-ul">
                  {tips.map((tip) => (
                    <li className="mail-p">{tip}</li>
                  ))}
                </ol>
              </Col>
              {container}
            </Row>
          ))}
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
          {mailGuide.map(({ title, tips, container, bold }, i) => (
            <Row className="mail-row">
              {title}
              <Col>
                <ol className="mail-ul">
                  {tips.map((tip) => (
                    <li className="mail-p">{tip}</li>
                  ))}
                </ol>
                <p className="mail-p">{bold}</p>
              </Col>
              {container}
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Emails;
