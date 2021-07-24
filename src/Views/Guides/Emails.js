import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Emails.css";
import NavCard from "../../Components/NavCard";
import { BiDetail } from "react-icons/bi";

const Emails = () => {
  const ticketGuide = [
    {
      title: "Section 1: Name and Title",
      tips: [
        "Format is lastname, firstname",
        "Keep title concise (my preferred title format is Asset Tag - Problem Statement/Error Message - Contact Information)",
      ],
      container: undefined,
    },
    {
      title: "Section 2: Description",
      tips: [
        "Brainstorm possible solutions and mark each solution with result (successful/unsuccessful)",
        "Treat as your personal notepad and jot down any important notes, contact information or answers to your follow-up questions",
      ],
      container: undefined,
      bold: [
        "Emails: Copy and paste email and surround with brackets",
        "Calls: Jot down important notes while client isdescribing issue",
      ],
    },
    {
      title: "Section 3: Adding Template and Additional Information",
      tips: [
        "Correct the auto-filled template to fit your situation",
        "You can find the department the client works in by accessing the ____ tab",
        "Assign the ticket to yourself and assign the department as servicedesk",
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
    },
    {
      title: "Section 4: Affected Items and Comments",
      tips: [
        "Enter the asset tag number of the affected devices",
        "General hardware such as docking stations and monitors can be found under the category Hardware Asset",
        "Comments is where you can communicate with other analysts when esclating and aim to treat is as a progress tracker where you add comments during certain milestones",
      ],
      container: undefined,
      bold: undefined,
    },
    {
      title: "Section 5: Resolution",
      tips: [
        "Resolution category will only be accessible after closing the ticket",
        "Determine the appropriate resolution category and input solution in resolution box",
      ],
      container: undefined,
    },
  ];

  const mailGuide = [
    {
      title: "1: Take emails and organize inbox",
      tips: [
        "Drag emails from ITS inbox into your personal inbox (Items Taken By...)",
        "Keep inbox organized and mark ongoing emails with flags",
        "TIP: Challenge yourself and look for emails containing unique issues",
      ],
      container: undefined,
    },
    {
      title: "#2: Create ticket and brainstorm solutions",
      tips: [
        "See above guide on ticket creation",
        "Access scripts, internal and external resources to brainstorm a list of possible solutions",
      ],
      container: undefined,
      bold: <b>STATUS: Mark ticket as "Work in Progress"</b>,
    },
    {
      title: "#3: Schedule and complete callback",
      tips: [
        "Send email back to client asking for availability and contact info",
        "Connect with client’s screen and attempt possible solutions (See escalation guide and escalate if appropriate)",
      ],
      container: undefined,
      bold: <b>STATUS: Mark ticket as "Waiting on Customer"</b>,
    },
    {
      title: "#4: Update and close ticket",
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
          {ticketGuide.map(({ title, tips, container, bold }, i) => (
            <Row className="mail-row">
              <h3 className="mail-h" key={i}>
                {title}
              </h3>

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
              <h3 className="mail-h" key={i}>
                {title}
              </h3>
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

{
  /*  */
}
