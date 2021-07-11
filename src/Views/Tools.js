import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './Views.css'
import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer"

import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Tools</h1>
        <p>Tools and applications used across York Region departments.</p>
      </div>

      
    </div>
  );
};

export default Tools;
