import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Tips.css";

import NavCard from "../Components/NavCard";

import { FiMonitor } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { FiCoffee } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import { IconContext } from "react-icons";

const Tips = () => {
  const e = [
    {
      title: "#1: Dual Monitor Display",
      paragraph:
        "Having 2 displays should be an essential part of a support analyst’s setup. When taking calls, it is very easy to become disorganized. Designating 1 screen to control your clients machine and another screen for your ticket and communications increases organization which helps to increase efficiency during a call.",
      icon: <FiMonitor className="ig" />,
    },
    {
      title: "#2: Designating Displays",
      paragraph:
        "Designating your displays is a great way to increase productivity during work. Personally, I designate my left monitor for service manager, browsers and client machines. My right monitor is split in half with Teams on one side and Outlook on the other. This ensures that I am always up-to-date with emails and messages from team members and clients",
      icon: <FaLaptopCode className="ig" />,
    },
    {
      title: "#3: Outlook Automation and Organization",
      paragraph:
        "Prepare for your Outlook to get super messy. From client emails, York Region communications and service manager notifications, you will receive 20-60 emails everyday. Adding rules is a great way to automatically filter your inbox. Personally, I filter all York Beat and York Communication emails into 1 folder, and all service manager notifications into another folder.",
      icon: <SiMicrosoftoutlook className="ig" />,
    },
    {
      title: "#4: Take a Break!",
      paragraph:
        "Your health always comes first! During the busy mornings, it is easy to lose track of time and eventually spend 2-3 hours sitting in one go. Speaking from personal experience, this can be detrimental for your health. Set timers to remind yourself to take a quick break every hour to go to the bathroom, get some water and stretch",
      icon: <FiCoffee className="ig" />,
    },
    {
      title: "#5: Weekly Call Goals",
      paragraph:
        "Taking calls is a scary part of the job, however it is essential to quickly adapt and become comfortable with this responsibility. Personally, I set weekly call goals where everyday, I want to take a minimum of x amount of calls. After every week, increase your minimum by 3-5 and you’ll feel comfortable in no time. As introvert, it's important to test your limits and challenge yourself.",
      icon: <FiFlag className="ig" />,
    },
  ];

  return (
    <div>
      <NavCard />
      <div className="tips-header">
        <h1>Helpful Tips</h1>
        <p>A collection of tips to boost your productivity and efficiency.</p>
      </div>

      {e.map((e) => (
        <Container className="tip-container">
          <Row className="tip-row">
            <Col sm={8}>
              <div className="text-card">
                <h3 className="tip-h">{e.title}</h3>
                <p className="tip-p">{e.paragraph}</p>
              </div>
            </Col>
            <Col className="tip-img" sm={4}>
              <IconContext.Provider value={{ color: "white" }}>
                {e.icon}
              </IconContext.Provider>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Tips;
