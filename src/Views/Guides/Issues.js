import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Issues.css";
import NavCard from "../../Components/NavCard";

import { BiMessageSquareCheck } from "react-icons/bi";

const Issues = () => {
  const issues = [
    {
      issueTitle: "Reset expired password",

      solution: [
        "Go to unlock.york.ca",
        "Enter current username and password in sign in box",
        "Follow instructions to create new password",
        "Connect to VPN using new password",
        "CTRL+ALT+DEL > lock screen > sign in using new password",
      ],

      issueTitle2: "Unable to open/check-in eDOCS documents",

      solution2: [
        "Close of office applications and eDOCS DM from task manager",
        "Go to file ___",
        "Run dmreset.bat",
        "Open eDOCS from desktop icon to create local file",
        "Check in/open documents",
      ],
    },
    {
      issueTitle: "Cannot print to regional printer",

      solution: [
        "Control Panel > Hardware and Devices > Add Printer",
        "When adding printer, select “Printer not listed” and search by printer number",
        "Enter asset tag of printer",
        "Connect to printer",
        "Print test page from Settings",
      ],

      issueTitle2: "FTP service Java required/blocked",

      solution2: [
        "Go to official Java website and download Java for Windows",
        "Follow steps in wizard",
        "Control Panel > Java > Security > Add https//:ftp.york.ca/ to allowed sites",
        "Open FTP in Internet Explorer",
      ],
    },
    {
      issueTitle: "Outlook missing add-ins",

      solution: [
        "File > Options > Add-Ins",
        "If add-in is “disabled” then enter “disabled add-ins” section and activate add-in",
        "Go to “COM Add-ins” and checkmark desired add-in",
        "Restart Outlook",
      ],

      issueTitle2: "VPN unsuccessful domain name resolution",

      solution2: [
        "Open to Command Prompt",
        "Enter command 'domain flushdns",
        "Restart computer and connect to VPN",
      ],
    },
    {
      issueTitle: "Headset not working in softphone",

      solution: [
        "Preferences > Audio > Select USB Device or Headset name for all audio outputs",
        "Complete Audio Tuning Wizard and play test sounds",
        "Complete test call",
      ],

      issueTitle2: "Dial tone in softphone during MS Teams call",

      solution2: [
        "Install Jabra Direct for headsets",
        "Check for software updates in audio and headset drivers",
        "Complete test calls",
      ],
    },
    {
      issueTitle: "Laptop unable to connect to network",

      solution: [
        "End Outlook task from task manager",
        "Control Panel > Credential Manager > Generic Credentials > Clear all generic credentials",
        "Restart machine",
      ],

      issueTitle2: "Outlook not connecting to exchange server",

      solution2: [
        "Ask user to use a wired connection or hotspot",
        "Connect to screen using GoToSupport",
        "Go to System Information do find model of laptop",
        "Go to Dell Knowledge Base and install the network driver for device",
        "Run through steps in wizard to install/update current driver",
        "Restart machine and disconnect wired connection test wireless connection",
      ],
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="issues-header">
        <h1>Common Issues and Solutions</h1>
        <p>Solutions and causes to common tickets</p>
      </div>

      {issues.map(({ issueTitle, issueTitle2, solution, solution2 }) => (
        <Container className="issues-container">
          <Row className="issues-row">
            <Col>
              <div className="issues-text-box" >
                <h3 className="issues-h">{issueTitle}</h3>

                <h3 className="issues-sub-h">
                  <BiMessageSquareCheck/> Solution:
                </h3>

                <p className="issues-p">
                  <ol>
                    {solution.map((solution) => (
                      <li className="issues-li">{solution}</li>
                    ))}
                  </ol>
                </p>
              </div>
            </Col>
            <Col>
              <div className="issues-text-box">
                <h3 className="issues-h">{issueTitle2}</h3>

                <h3 className="issues-sub-h">
                  <BiMessageSquareCheck /> Solution:
                </h3>

                <p className="issues-p">
                  <ol>
                    {solution2.map((solution) => (
                      <li className="issues-li">{solution}</li>
                    ))}
                  </ol>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Issues;
