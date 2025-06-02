import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const HomeDemands = () => {
  const [activeTab, setActiveTab] = useState("demands");

  const layout = [
    [1, 1, 2],
    [2, 1],
    [1, 2, 1],
    [2, 2],
    [1, 1, 2],
    [2, 1],
    [1, 2, 1],
    [2, 2],
  ];

  return (
    <div
      style={{ overflow: "hidden", backgroundColor: "white" }}
      id="demandPage"
      className="demands mt-5"
    >
      <Row>
        <Col md={9}>
          <div className="demands-heading">
            Gain Valuable Insights into Hygienic Product Manufacturing and
            Global Private Label Trends
          </div>
          <div className="contactUsBtn">
            Contact Us <ArrowUpRight />
          </div>
        </Col>
        <Col md={3}>
          <img className="mt-5" src="/demandFigma.jpg" />
        </Col>
      </Row>
    </div>
  );
};

export default HomeDemands;
