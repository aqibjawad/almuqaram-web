import React from "react";
import { Row, Col } from "react-bootstrap";
import "./about.css";

const AboutBanner = () => {
  return (
    <>
      <div className="aboutBanner">
        <Row>
          <Col md={6} sm={12}>
            <div className="aboutHead">About Us</div>
            <div className="aboutDescrp">
              Trusted Hygiene Experts Since 2013
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="descrpAbut">
              Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic Products
              Industry LLC is one of the fastest-growing converters of hygienic
              paper products in the GCC and beyond. Backed by the 30-year legacy
              of the AL MUQARRAM Group, we’re committed to quality,
              sustainability, and customer satisfaction.
            </div>
            <Row className="mt-3">
              <Col md={6} sm={12}>
                <div className="lernMore">
                  Learn More <img src="contact.png" />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="contBtn">
                  Get Started <img src="getStarted.png" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <img className="bannerImage" src="/Vector 1.png" />
    </>
  );
};

export default AboutBanner;
