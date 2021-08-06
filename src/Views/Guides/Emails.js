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
import email7 from "../../img/e7.png";
import email8 from "../../img/re.png";

import e6 from "../../img/6.png";
import e4 from "../../img/4.png";
import e3 from "../../img/3.png";
import e5 from "../../img/5.png";

const Emails = () => {
  const ticketGuide = [
    {
      title: <h3 className="mail-h">Section 1: Affected User and Title </h3>,
      tips: [
        "Format is lastname, firstname (username)",
        "Stick to the title format [Asset Tag] - [Affected App] - [Problem Statement/Error Message] - [Callback #]",
      ],
      img: email1,
    },
    {
      title: <h3 className="mail-h">Section 2: Description</h3>,
      tips: [
        "The description should be treated as your personal notepad and jot down any important notes, contact information or answers to your follow-up questions",
        "Access resources and make a note of all possible solutions in this box",
        "Preparing the steps you plan to take keeps you organized and make callbacks more efficient",
        "After testing each possible solution, mark each with the result (successful/unsuccessful)",
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
        "Add the template of the affected application by selecting 'Add Template' in the task bar",
        "Correct the auto-filled template to fit your situation",
        'You can find the department the client works in by accessing the "York Customizations" tab',
        "Assign the ticket to yourself and assign the department as SC_ServiceDesk",
      ],
      container: (
        <Col>
          <div className="mail-card">
            <h6 className="card-h">Some Common Departments</h6>
            <p className="mail-p">
              <b>SC_ServiceDesk2ndLevel:</b> Hardware and OS
            </p>
            <p className="mail-p">
              <b>SC_Network:</b> Network drives and data services
            </p>
            <p className="mail-p">
              <b>SC_eDOCS:</b> Account access and eDOCS{" "}
            </p>
            <p className="mail-p">
              <b>SC_Blackberry{"&"}Cellular:</b> Mobile phone issues
            </p>
          </div>
        </Col>
      ),

      img: email3,
    },
    {
      title: <h3 className="mail-h">Section 4: Affected Items and Comments</h3>,
      tips: [
        "Enter the asset tag number of the affected device(s) which can be found on the blue sticker marked 'Department ID'",
        "General hardware such as docking stations and monitors can be found under the category 'Hardware Asset'",
        "Printers are found under the 'Printer' category",
      ],

      img: email4,
    },
    {
      title: (
        <h3 className="mail-h">Section 5: Analyst Comments and Action Log</h3>
      ),
      tips: [
        "Any comments you add will be sent to the affected user unless the private box is checked",
        "Use this section to provide progress updates (ex. 'Sent client callback email' or 'Scheduled callback for...')",
        "Comments are often used as a source of communication between other analysts as during ticket escalation",
        "Clients may also communicate wiht analysts through comments",
        "In closed tickets, the resolution will appear in analyst comments",
      ],

      img: email7,
    },
    {
      title: <h3 className="mail-h">Section 6: Related Items</h3>,
      tips: [
        "Any relevant images, screenshots or emails can be attached under the 'Attached Files' section",
        "If there are any related past IR tickets that have affected the same user, they can be added to the 'Work Items' section",
      ],
      container: undefined,
      img: email8,
    },
    {
      title: <h3 className="mail-h">Section 7: Resolution</h3>,
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
        "It is critical to continuously monitor this inbox throughout the day",
        "Remember to mark emails you have read but not taken as unread for other analysts to see",
        "Drag emails from the ITS inbox into your personal inbox (Items Taken By...)",
        "Keep personal inbox organized and mark ongoing emails with flags",
      ],
      bold: (
        <b>
          TIP: Challenge yourself and look for emails containing unique issues
        </b>
      ),
      img: e5,
    },
    {
      title: (
        <h3 className="mail-h">#2: Create ticket and brainstorm solutions</h3>
      ),
      tips: [
        "See above guide on ticket creation",
        "Copy and paste the email message and enter it between quotes",
        "Save and name a copy of the email as the ticket number and attach it in 'Attached Files'",
        "Access scripts, old tickets to brainstorm a list of possible solutions",
        "Don't be afraid to ask your coworkers for help if you cannot find a solution",
      ],
      bold: (
        <b>
          STATUS: Mark ticket as "Work in Progress" while brainstorming
          solutions
        </b>
      ),
      img: e4,
    },
    {
      title: <h3 className="mail-h">#3: Schedule and complete callback</h3>,
      tips: [
        "Send email back to client asking for availability and contact info (See image above for sample email)",
        "Connect with client’s screen and attempt possible solutions (See escalation guide and escalate if appropriate)",
      ],
      bold: <b>STATUS: Mark ticket as "Waiting on Customer"</b>,
      img: e3,
    },
    {
      title: <h3 className="mail-h">#4: Update and close ticket</h3>,
      tips: [
        "Identify successful solution from you brainstorm",
        "Update ticket with contact info and asset tag number",
        "Fill in resolution box with successful solution and select appropriate resolution type",
        "Mark completed emails in personal inbox with a checkmark",
      ],
      bold: <b>STATUS: Mark ticket as "Closed"</b>,
      img: e6,
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
                A ticket is a capsule of information containing an overview of a
                clients issue. It is also a way of tracking progress and
                collborating with other analysts. Creating tickets is an
                essential part of your responsibilities and provided is a guide
                outlining each different section of a ticket, the information it
                should include and helpful tips to create effective tickets.
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
          {ticketGuide.map(
            ({ title, tips, container, img, bold, paragraph }, i) => (
              <Row className="mail-row">
                {title}
                <div className="mail-img-div">
                  <img src={img} />
                </div>

                <Col>
                  {bold}
                  <p className="mail-p">{paragraph}</p>
                  <ul className="mail-ul">
                    {tips.map((tip) => (
                      <li className="mail-p">{tip}</li>
                    ))}
                  </ul>
                </Col>
                {container}
              </Row>
            )
          )}
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
                The ITS inbox is a shared inbox across the entire team where
                dozens of issues and requests appear. As a support analyst,
                monitoring and taking emails is a key responsibility. While each
                email will be different, provided are some of my personal notes
                that I found to be very helpful.
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
          {mailGuide.map(({ title, tips, container, bold, img }, i) => (
            <Row className="mail-row">
              {title}
              <div className="mail-img-div">
                <img src={img} />
              </div>
              <Col>
                <ul className="mail-ul">
                  {tips.map((tip) => (
                    <li className="mail-p">{tip}</li>
                  ))}
                </ul>
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
