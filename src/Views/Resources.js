import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Resources</h1>
        <p>Helpful documents and links.</p>
      </div>
    </div>
  );
};

export default Resources;
