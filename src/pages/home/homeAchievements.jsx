import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const HomeAchievement = () => {
  return (
    <div id="HomeAchievement" style={{ marginRight: "3rem" }}>
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
            <Row>
              <Col md={6}>
                <div className="cardAchievement">
                  <img src="/Achieve1.png" />
                </div>
              </Col>
              <Col md={6}>
                <div className="cardAchievement">
                  <img style={{widt:"200px", height:"106px"}} src="/Achieve2.png" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <div>
            <img
              className="achieve-Image"
              src="/achieveRight.png"
              alt="achieve Image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAchievement;
