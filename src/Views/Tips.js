import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './Views.css'

import NavCard from "../Components/NavCard";
import Footer from "../Components/Footer"

import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div>
      <NavCard />
      <div className="header">
        <h1>Helpful Tips</h1>
        <p>A collection of general tips to boost your productivity and efficiency.</p>
      </div>

      
    </div>
  );
};

export default Tips;
