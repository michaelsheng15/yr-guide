import "./Modal.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

import { IconContext } from "react-icons";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Container className="modal-container">
          <Row className="modal-row">
            <Col>
              <h3>
                About the Developer! <BiUser />
              </h3>
              <p>
                This website is developed completely from scratch by <span style={{color:'rgb(234, 0, 255)'}}>Michael
                Sheng</span> in Summer 2021.
              </p>
              <p>
                <b>Tools:</b> React.js | CSS | Bootstrap | Heroku
              </p>
              <p>Have a recommendation? Contact me!</p>
              <div className="modal-btn-div">
                <button
                  className="btn-modal"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Modal;
