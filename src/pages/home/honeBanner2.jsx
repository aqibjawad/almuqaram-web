import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeBanner.css";

const HomeBanner2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [counters, setCounters] = useState({ stat1: 0, stat2: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated counter function
  const animateCounters = () => {
    // Animate 99%
    let current1 = 0;
    const target1 = 99;
    const increment1 = target1 / 100;
    const timer1 = setInterval(() => {
      current1 += increment1;
      if (current1 >= target1) {
        current1 = target1;
        clearInterval(timer1);
      }
      setCounters((prev) => ({ ...prev, stat1: Math.floor(current1) }));
    }, 20);

    // Animate 25M
    setTimeout(() => {
      let current2 = 0;
      const target2 = 25;
      const increment2 = target2 / 100;
      const timer2 = setInterval(() => {
        current2 += increment2;
        if (current2 >= target2) {
          current2 = target2;
          clearInterval(timer2);
        }
        setCounters((prev) => ({ ...prev, stat2: Math.floor(current2) }));
      }, 20);
    }, 200);
  };

  // Ripple effect for buttons
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const carouselStyles = {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "800px",
      height: "830px",
      margin: "0 auto",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: 'url("/carousalBG.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    content: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "40px",
      background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
    },
    itemsContainer: {
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      animation: "fadeIn 0.5s ease-in-out",
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#333",
      marginBottom: "8px",
      margin: 0,
    },
    subtitle: {
      fontSize: "16px",
      color: "#666",
      lineHeight: "1.5",
      margin: 0,
    },
    arrowIcon: {
      fontSize: "24px",
      color: "#007bff",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      userSelect: "none",
    },
    indicators: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginTop: "20px",
    },
    indicator: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#E3E3E3",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      padding: 0,
    },
    indicatorActive: {
      backgroundColor: "#007bff",
      transform: "scale(1.2)",
    },
  };

  return (
    <div id="homeBanner2" className="mt-5" style={{ marginRight: "3rem" }}>
      <Row>
        <Col>
          <div className="hygiene-card">
            <div className="card-content">
              <div className="title" style={{ color: "#0E9CB4" }}>
                Trusted Hygiene Experts Since 2013
              </div>

              <p className="description">
                Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic
                Products Industry LLC is one of the fastest-growing converters
                of hygienic paper products in the GCC and beyond. Backed by the
                30-year legacy of the AL MUQARRAM Group, we're committed to
                quality, sustainability, and customer satisfaction.
              </p>

              <div className="button-container">
                <button className="learn-more" onClick={createRipple}>
                  Learn More <span className="arrow">→</span>
                </button>
                <button className="get-started" onClick={createRipple}>
                  Get started <span className="arrow">→</span>
                </button>
              </div>

              <div className="stats-container" ref={statsRef}>
                <div className="stat-item">
                  <h2 className="stat-number">{counters.stat1}%</h2>
                  <p className="stat-description">
                    Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                    dolor.
                  </p>
                </div>

                <div className="stat-item">
                  <h2 className="stat-number">{counters.stat2}M</h2>
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
          <div style={carouselStyles.container}>
            <div style={carouselStyles.backgroundImage}></div>

            <div style={carouselStyles.content}>
              <div style={carouselStyles.itemsContainer}>
                <div style={carouselStyles.item}>
                  <div style={carouselStyles.textContainer}>
                    <h3 style={carouselStyles.title}>
                      {carouselItems[activeIndex].title}
                    </h3>
                    <p style={carouselStyles.subtitle}>
                      {carouselItems[activeIndex].subtitle}
                    </p>
                  </div>
                  <div
                    style={carouselStyles.arrowIcon}
                    onClick={nextSlide}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "translateX(5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "translateX(0)")
                    }
                  >
                    →
                  </div>
                </div>
              </div>

              <div style={carouselStyles.indicators}>
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    style={{
                      ...carouselStyles.indicator,
                      ...(index === activeIndex
                        ? carouselStyles.indicatorActive
                        : {}),
                    }}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={(e) => {
                      if (index !== activeIndex) {
                        e.target.style.backgroundColor = "#ccc";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== activeIndex) {
                        e.target.style.backgroundColor = "#E3E3E3";
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @media (max-width: 768px) {
                .carousel-container {
                  height: 300px !important;
                  margin: 0 10px !important;
                }

                .carousel-content {
                  padding: 20px !important;
                }

                .carousel-title {
                  font-size: 20px !important;
                }

                .carousel-subtitle {
                  font-size: 14px !important;
                }

                .carousel-item {
                  padding: 15px !important;
                }
              }
            `}</style>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBanner2;
