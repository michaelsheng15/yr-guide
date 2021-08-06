import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import PageFooter from "../Components/PageFooter";

import "./Tools.css";
import { BiGitPullRequest } from "react-icons/bi";
import { BiCube } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";

import itsr from "../img/itsr.png";
import mdr from "../img/mdr.png";
import ereq from "../img/ereq.png";
import tsr from "../img/tsr.png";

import ad from "../img/ad.png";
import fin from "../img/fin.png";
import unity from "../img/unity.png";
import dell from "../img/dell.png";
import dev from "../img/dev.png";
import gta from "../img/gta.png";
import sm from "../img/sm.png";
import rc from "../img/rc.png";

import vpn from "../img/vpn.png";
import ip from "../img/ip.png";
import citrix from "../img/citrix.png";
import ftp from "../img/ftp.png";
import xm from "../img/xm.png";
import teams from "../img/teams.png";
import outlook from "../img/outlook.png";
import rosie from "../img/rosie.png";

const Tools = () => {
  const request = [
    {
      title: "E-Request",
      description:
        "Request system for environment and transportation employees.",
      button: "Go to request",
      link: "",
      img: ereq,

      title2: "ITSR/Jira",
      description2:
        "Request system for all non Community Health Service, Envrionment and Transportation employees.",
      button2: "Go to request",
      link2: "",
      img2: itsr,
    },
    {
      title: "Mobile Device Request",
      description:
        "Request system for environment and transportation employees.",
      button: "Go to request",
      link: "",
      img: mdr,

      title2: "MyTechSupport",
      description2:
        "Request system for only Community Health Service employees",
      button2: "Go to request",
      link2: "",
      img2: tsr,
    },
  ];

  const IT = [
    {
      title: "Active Directory",
      description:
        "A directory of all York Region accounts. Used to view account status, reset password and more.",
      button: "Learn more",
      link: "https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
      img: ad,

      title2: "Cisco Finesse",
      description2:
        "An agent integrated with your softphone where you monitor incoming calls, queue status and statistics.",
      button2: "Learn more",
      link2: "https://comstice.com/blog/post/cisco-finesse-faq",
      img2: fin,
    },
    {
      title: "Cisco Unity",
      description:
        "Data base of administrative tools for Cisco Softphones. Often used in voicemail password resets.",

      button: "Learn more",
      link: "",
      img: unity,

      title2: "Dell Knowledge Base",
      description2:
        "A database of technical support articles and guides for Dell computers, mainly used in driver installation and updates.",
      button2: "Learn more",
      link2: "https://www.dell.com/support/home/en-ca?app=knowledgebase",
      img2: dell,
    },
    {
      title: "Device Manager",
      description:
        "A internal tool used to view status of a machine's drivers. Very useful is diagnosing and fixing hardware issues.",
      button: "Learn more",
      link: "https://en.wikipedia.org/wiki/Device_Manager",
      img: dev,

      title2: "GoToAssist",
      description2:
        "An external support tool used to view and control a clients screen without having to be connected to a York Region network",

      button2: "Learn more",
      link2: "https://get.gotoassist.com/",
      img2: gta,
    },
    {
      title: "Service Manager",
      description:
        "An application used to create, monitor and escalate incident tickets.",
      button: "Learn more",
      link: "https://www.thewindowsclub.com/open-windows-services",
      img: sm,

      title2: "RC Viewer",
      description2:
        "An internal support tool used to control a clients screen. Client must be connected to York Region network.",
      button2: "Learn more",
      link2:
        "https://docs.microsoft.com/en-us/mem/configmgr/core/clients/manage/remote-control/remotely-administer-a-windows-client-computer",
      img2: rc,
    },
  ];

  const apps = [
    {
      title: "Cisco AnyConnect Client",
      description:
        "A VPN client used to connect to York Region network to access regional tools and applications.",
      button: "Learn more",
      link: "https://www.cisco.com/c/en_ca/products/security/anyconnect-secure-mobility-client/index.html",
      img: vpn,

      title2: "Cisco IP Communicator",
      description2:
        "A desktop phone that can be used to communicate with internal regional employees and external callers.",
      button2: "Learn more",
      link2:
        "https://www.cisco.com/c/en/us/products/collaboration-endpoints/ip-communicator/index.html",
      img2: ip,
    },
    {
      title: "Citrix",
      description:
        "A desktop client used to access York Region tools and applications without connecting to regional network.",
      button: "Learn more",
      link: "https://www.citrix.com/",
      img: citrix,

      title2: "FTP Service",
      description2:
        "An online service used to send large files over emails that exceed Outlook attachment size limits.",

      button2: "Learn more",
      link2: "",
      img2: ftp,
    },
    {
      title: "InforXM",
      description:
        "An online tool used by York Region employees to submit forms for reinbursable expenses.",
      button: "Learn more",
      link: "https://www.infor.com/products/expense-management",
      img: xm,

      title2: "Microsoft Teams",
      description2:
        "The main method of communication with coworkers through private messaging and team meetings.",
      button2: "Learn more",
      link2: "https://en.wikipedia.org/wiki/Microsoft_Teams",
      img2: teams,
    },
    {
      title: "Outlook",
      description: "Primary email application for all York Region employees.",
      button: "Learn more",
      link: "https://outlook.live.com/owa/",
      img: outlook,

      title2: "ROSIE",
      description2:
        "A self-service tools used to view employee information, payroll benefits, online courses and more.",
      button2: "Learn more",
      link2: "",
      img2: rosie,
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="tools-header">
        <h1>Tools</h1>
        <p>
          An overview of some common tools and applications used across York
          Region.
        </p>
      </div>

      <Container className="tools-container">
        <div className="tools-div">
          <h3 className="tools-sub-header">
            Request Systems <BiGitPullRequest />
          </h3>
          {request.map((e) => (
            <Row className="tools-row">
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img
                    variant="top"
                    src={e.img}
                    style={{ height: "220px" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <a href={e.link} target="_blank">
                      <Button variant="primary">{e.button}</Button>
                    </a>{" "}
                  </Card.Body>
                </Card>
              </Col>
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img
                    variant="top"
                    src={e.img2}
                    style={{ height: "220px" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.title2}</Card.Title>
                    <Card.Text>{e.description2}</Card.Text>
                    <a href={e.link2} target="_blank">
                      <Button variant="primary">{e.button2}</Button>
                    </a>{" "}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <hr />

      <Container className="tools-container">
        <div>
          <h3 className="tools-sub-header">
            ITS Tools <BiCube />
          </h3>

          {IT.map(
            ({
              title,
              description,
              button,
              link,
              img,
              title2,
              description2,
              button2,
              link2,
              img2,
            }) => (
              <Row className="tools-row">
                <Col className="tools-col">
                  <Card className="tools-card">
                    <Card.Img
                      variant="top"
                      src={img}
                      style={{ height: "220px" }}
                    />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <a href={link} target="_blank">
                        <Button variant="primary">{button}</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="tools-col">
                  <Card className="tools-card">
                    <Card.Img
                      variant="top"
                      src={img2}
                      style={{ height: "220px" }}
                    />
                    <Card.Body>
                      <Card.Title>{title2}</Card.Title>
                      <Card.Text>{description2}</Card.Text>
                      <a href={link2} target="_blank">
                        <Button variant="primary">{button2}</Button>
                      </a>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )
          )}
        </div>
      </Container>

      <hr />

      <Container className="tools-container">
        <div>
          <h3 className="tools-sub-header">
            York Region Applications <BiCollection />
          </h3>
          {apps.map((e) => (
            <Row className="tools-row">
              <Col className="tools-col">
                <Card className="tools-card" >
                  <Card.Img
                    variant="top"
                    src={e.img}
                    style={{ height: "220px" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <a href={e.link} target="_blank">
                      <Button variant="primary">{e.button}</Button>
                    </a>{" "}
                  </Card.Body>
                </Card>
              </Col>
              <Col className="tools-col">
                <Card className="tools-card">
                  <Card.Img
                    variant="top"
                    src={e.img2}
                    style={{ height: "220px" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.title2}</Card.Title>
                    <Card.Text>{e.description2}</Card.Text>
                    <a href={e.link2} target="_blank">
                      <Button variant="primary">{e.button2}</Button>
                    </a>{" "}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      <PageFooter />
    </div>
  );
};

export default Tools;
