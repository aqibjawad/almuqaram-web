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

          <Row className="mt-3">
            <Col md={6} sm={12} lg={6}>
              <div className="stat-box">
                <h2 className="stat-value">99 %</h2>
                <p className="stat-label">
                  Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                  dolor.
                </p>
              </div>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="stat-box">
                <h2 className="stat-value">99 %</h2>
                <p className="stat-label">
                  Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                  dolor.
                </p>
              </div>
            </Col>
            <Col className="mt-3" md={6} sm={12} lg={6}>
              <div className="stat-box">
                <h2 className="stat-value">99 %</h2>
                <p className="stat-label">
                  Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                  dolor.
                </p>
              </div>
            </Col>
            <Col className="mt-3" md={6} sm={12} lg={6}>
              <div className="stat-box">
                <h2 className="stat-value">99 %</h2>
                <p className="stat-label">
                  Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                  dolor.
                </p>
              </div>
            </Col>
          </Row>
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
