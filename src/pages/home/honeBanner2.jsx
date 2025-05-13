import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
// import carousalBG from '../../public/carousalBG.png'; // Adjust path as needed


const HomeBanner2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Explore Private Labeling",
      subtitle: "Explore Custom Hygiene Products",
    },
    {
      title: "Explore Our Brands",
      subtitle: "Shop SOFTCARE Essentials",
    },
    {
      title: "Custom Solutions",
      subtitle: "Tailored Hygiene Products For Your Needs",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="homeBanner2" className="mt-5" style={{marginRight:"3rem"}}>
      <Row>
        <Col>
          <div className="hygiene-card">
            <div className="card-content">
              <h1 className="title">Trusted Hygiene Experts Since 2013</h1>

              <p className="description">
                Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic
                Products Industry LLC is one of the fastest-growing converters
                of hygienic paper products in the GCC and beyond. Backed by the
                30-year legacy of the AL MUQARRAM Group, we're committed to
                quality, sustainability, and customer satisfaction.
              </p>

              <div className="button-container">
                <button className="learn-more">
                  Learn More <span className="arrow">→</span>
                </button>
                <button className="get-started">
                  Get started <span className="arrow">→</span>
                </button>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <h2 className="stat-number">99%</h2>
                  <p className="stat-description">
                    Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                    dolor.
                  </p>
                </div>

                <div className="stat-item">
                  <h2 className="stat-number">25M</h2>
                  <p className="stat-description">
                    Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                    dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="hygiene-carousel-container">
            <div className="background-image">
              {/* Background image is set in CSS */}
            </div>

            <div className="carousel-content">
              <div className="carousel-items">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <div className="carousel-text">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <div className="arrow-icon">→</div>
                  </div>
                ))}
              </div>

              <div className="carousel-indicators">
                {carouselItems.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>

              {/* <div className="carousel-controls">
                <button className="control-btn prev" onClick={prevSlide}>
                  &#10094;
                </button>
                <button className="control-btn next" onClick={nextSlide}>
                  &#10095;
                </button>
              </div> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBanner2;
