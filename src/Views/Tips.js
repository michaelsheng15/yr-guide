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
  return (
    <div>
      <NavCard />
      <div className="tips-header">
        <h1>Helpful Tips</h1>
        <p>
          A collection of tips to boost your productivity and
          efficiency.
        </p>
      </div>

      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#1: Dual Monitor Display</h3>
              <p className="tip-p">
                Having 2 displays should be an essential part of a support
                analyst’s setup. When taking calls, it is very easy to become
                disorganized with your ticket, client’s screen and other
                resources floating about. Designating 1 screen to control your
                clients machine and another screen for your ticket and
                communications increases organization which helps to increase
                efficiency during a call.
              </p>
            </div>
          </Col>
          <Col className="tip-img" sm={4}>
            <IconContext.Provider value={{ color: "white" }}>
              <FiMonitor className="ig" />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#2: Designating Displays</h3>
              <p className="tip-p">
                Designating your displays is a great way to increase
                productivity during work. Personally, I designate my left
                monitor for service manager, browsers and client machines. My
                right monitor is split in half with Teams on one side and
                Outlook on the other. This ensures that I am always up-to-date
                with emails and messages from team members and clients
              </p>
            </div>
          </Col>
          <Col className="tip-img" sm={4}>
            <IconContext.Provider value={{ color: "white" }}>
              <FaLaptopCode className="ig" />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#3: Outlook Automation and Organization</h3>
              <p className="tip-p">
                Prepare for your Outlook to get super messy. From client emails,
                York Region communications and service manager notifications,
                you will receive 20-60 emails everyday. Adding rules is a great
                way to automatically filter your inbox. Personally, I filter all
                York Beat and York Communication emails into 1 folder, and all
                service manager notifications into another folder.
              </p>
            </div>
          </Col>
          <Col className="tip-img" sm={4} >
            <IconContext.Provider value={{ color: "white" }}>
              <SiMicrosoftoutlook className="ig" />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#4: Take a Break!</h3>
              <p className="tip-p">
                Your health always comes first! During the busy mornings, it is
                easy to lose track of time and eventually spend 2-3 hours
                sitting in one go. Speaking from personal experience, this can
                be detrimental for your health. Set timers to remind yourself to
                take a quick break every hour to go to the bathroom, get some
                water and stretch
              </p>
            </div>
          </Col>
          <Col className="tip-img" sm={4} >
            <IconContext.Provider value={{ color: "white" }}>
              <FiCoffee className="ig" />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
      <Container className="tip-container">
        <Row className="tip-row">
          <Col sm={8}>
            <div className="text-card">
              <h3 className="tip-h">#5: Weekly Call Goals</h3>
              <p className="tip-p">
                Taking calls is a scary part of the job, however it is essential
                to quickly adapt and become comfortable with this
                responsibility. Personally, I set weekly call goals where
                everyday, I want to take a minimum of x amount of calls. After
                every week, increase your minimum by 3-5 and you’ll feel
                comfortable in no time. As introvert, it's important to test
                your limits and challenge yourself
              </p>
            </div>
          </Col>
          <Col className="tip-img" sm={4}>
            <IconContext.Provider value={{ color: "white" }}>
              <FiFlag className="ig" />
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tips;
