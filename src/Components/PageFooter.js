import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./PageFooter.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { IconContext } from "react-icons";

const PageFooter = () => {
  return (
    <Container className="page-footer-container">
      <Row className='footer-row'>
        <Col className='text-col'>
          <p className="footer-p">
            Developed by <span className='name'>Michael Sheng</span>. &copy; 2021
          </p>
        </Col>

        <Col className="logo-col">
          <IconContext.Provider
            value={{ color: "grey", className: "button-scale" }}
          >
            <button className="button-icon">
              <a
                target="_blank"
                href="https://github.com/michaelsheng15"
                rel="noreferrer"
              >
                <AiFillGithub className="logo" />
              </a>
            </button>
          </IconContext.Provider>

          <IconContext.Provider
            value={{ color: "grey", className: "button-scale" }}
          >
            <button className="button-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/michaeljsheng/"
                rel="noreferrer"
              >
                <AiFillLinkedin className="logo" />
              </a>
            </button>
          </IconContext.Provider>

          <IconContext.Provider
            value={{ color: "grey", className: "button-scale" }}
          >
            <button className="button-icon">
              <a
                target="_blank"
                href="mailto:m3sheng@uwaterloo.ca"
                rel="noreferrer"
              >
                <AiFillMail className="logo" />
              </a>
            </button>
          </IconContext.Provider>
        </Col>
      </Row>
   
    </Container>
  );
};

export default PageFooter;
