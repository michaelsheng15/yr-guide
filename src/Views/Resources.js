import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./Resources.css";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BsFileSpreadsheet } from "react-icons/bs";




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
            <h3 className="res-sub-header">Documents</h3>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
            <div className="res-box-doc">
              <a><HiOutlineDocumentDuplicate />Test</a>
            </div>
          </Col>
          <Col>
            <h3 className='res-sub-header'>Spreadsheets</h3>
            <div className="res-box-sheet">
              <a><BsFileSpreadsheet />Test</a>
            </div>
            <div className="res-box-sheet">
              <a><BsFileSpreadsheet />Test</a>
            </div>
            <div className="res-box-sheet">
              <a><BsFileSpreadsheet />Test</a>
            </div>
            <div className="res-box-sheet">
              <a><BsFileSpreadsheet />Test</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resources;
