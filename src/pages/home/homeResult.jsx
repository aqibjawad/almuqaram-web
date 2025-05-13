import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const HomeRsult = () => {
  return (
    <div id="homeRsult" style={{ marginRight: "3rem" }}>
      <Row className="mt-5">
        <Col>
          <div>
            <div className="resultMeasureable">
              Proven Results Backed by Measurable Achievements
            </div>
            <div className="result-descrp">
              Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
              Industry LLC is one of the fastest-growing converters of hygienic
              paper products in the GCC and beyond.
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              className="world-Image"
              src="/WorldImage.png"
              alt="World Image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeRsult;
