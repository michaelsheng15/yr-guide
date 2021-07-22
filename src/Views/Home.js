import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BiAtom } from "react-icons/bi";

import "./Home.css";
import home1 from "../img/home2.png";

import React, { Component } from "react";
import Modal from "../Components/Modal";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="screen">
        <NavCard />
        <Container>
          <Row className="home-row">
            <Col className="text-col">
              <h1 className="home-h">Welcome! 👋</h1>
              <p className="home-p">
                Redeployed? Co-op student? New employee? This handbook provides
                a collection of tools and resources to help you adapt quickly to
                your role as a Support Analyst
                <span style={{ color: "rgb(4, 0, 255)" }}> @York Region</span>.
              </p>

              <div className="btn-container">
                <Link to="/guides" style={{ textDecoration: "none" }}>
                  <a className="btn">Get Started!</a>
                </Link>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <p>Modal</p>
                </Modal>
                <a className="btn" id="outline" onClick={this.showModal}>
                  About the Dev!
                </a>
              </div>
            </Col>
            <Col className="img-col">
              <img src={home1} className="img" />
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
export default Home;
