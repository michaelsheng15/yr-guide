import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Resources.css";

import { BiFolder } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import { BiBook } from "react-icons/bi";

import { BiSpreadsheet } from "react-icons/bi";

const Resources = () => {
  return (
    <div>
      <NavCard />
      <div className="res-header">
        <h1>Resources</h1>
        <p>Helpful documents and links.</p>
      </div>

      <Container className="res-container">
        <Row className="res-row">
          <Col className="res-col">
            <h3 className="res-sub-header">
              Documents <BiFolder />
            </h3>
            <div className="res-box-doc">
              <a href='none'><BiFile/>Test</a>
            </div>
            
          </Col>
          <Col>
            <h3 className="res-sub-header">Spreadsheets <BiBook /></h3>
            <div className="res-box-sheet">
              <a href='none'>
                <BiSpreadsheet />
                Test
              </a>
            </div>
            <div className="res-box-sheet">
              <a href='none'>
                <BiSpreadsheet />
                Test
              </a>
            </div>
            <div className="res-box-sheet">
              <a href='none'>
                <BiSpreadsheet />
                Test
              </a>
            </div>
          </Col>
          <Col>
            <h3 className="res-sub-header">
              Spreadsheets <BiBook />
            </h3>
            <div className="res-box-sheet">
              <a href='none'>
                <BiSpreadsheet />
                Test
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resources;
