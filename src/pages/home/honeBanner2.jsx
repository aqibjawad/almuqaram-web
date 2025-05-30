import React, { useState, useEffect, useRef } from "react";

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

  return (
    <div className="home-banner-wrapper">
      <div className="banner-row">
        {/* Left Column - Content Card */}
        <div className="banner-col-left">
          <div className="hygiene-content-card">
            <div className="content-inner">
              <div className="main-heading">
                Trusted Hygiene Experts Since 2013
              </div>

              <p className="main-description">
                Founded in the heart of Ajman, UAE, AL MUQARRAM Hygienic
                Products Industry LLC is a rapidly growing manufacturer and
                converter of hygienic paper products, serving customers across
                the GCC and beyond. Backed by the 30-year industrial legacy of
                the AL MUQARRAM Group, we operate with a clear mission: to
                deliver high-quality, sustainable hygiene solutions that meet
                the evolving needs of households, businesses, and institutions.
              </p>

              <div className="action-buttons">
                <button className="btn-learn-more" onClick={createRipple}>
                  Learn More <span className="btn-arrow">→</span>
                </button>
                <button className="btn-get-started" onClick={createRipple}>
                  Get started <span className="btn-arrow">→</span>
                </button>
              </div>

              <div className="statistics-section" ref={statsRef}>
                <div className="stat-box">
                  <h2 className="stat-value">{counters.stat1}%</h2>
                  <p className="stat-label">
                    Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                    dolor.
                  </p>
                </div>

                <div className="stat-box">
                  <h2 className="stat-value">{counters.stat2}M</h2>
                  <p className="stat-label">
                    Lorem ipsum dolor sit amet, consectetur elit lorem ipsum
                    dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className="banner-col-right">
          <div className="carousel-wrapper">
            <div className="carousel-bg-image"></div>

            <div className="carousel-content">
              <div className="carousel-items-area">
                <div className="carousel-active-item">
                  <div className="carousel-text-area">
                    <h3 className="carousel-main-title">
                      {carouselItems[activeIndex].title}
                    </h3>
                    <p className="carousel-sub-title">
                      {carouselItems[activeIndex].subtitle}
                    </p>
                  </div>
                  <div className="carousel-next-arrow" onClick={nextSlide}>
                    →
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-dots">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    index === activeIndex ? "carousel-dot-active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Wrapper */
        .home-banner-wrapper {
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
          margin-right: 3rem;
        }

        .home-banner-wrapper::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          animation: float-bg 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes float-bg {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Banner Layout - Equal heights */
        .banner-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          align-items: start;
          min-height: 830px;
        }

        /* Left Column Styles */
        .banner-col-left {
          position: relative;
          z-index: 2;
          display: flex;
        }

        .hygiene-content-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          transform: translateY(0);
          transition: all 0.6s ease;
          height: 830px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hygiene-content-card::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(45, 196, 187, 0.03) 0%,
            transparent 70%
          );
          animation: float-card 8s ease-in-out infinite reverse;
          pointer-events: none;
        }

        @keyframes float-card {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .content-inner {
          position: relative;
          z-index: 3;
        }

        .main-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: black;
          margin-bottom: 30px;
          line-height: 1.2;
          animation: slide-in-left 1s ease-out;
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .main-description {
          font-size: 1.2rem;
          color: black;
          margin-bottom: 40px;
          line-height: 1.8;
          animation: slide-in-left 1s ease-out 0.3s both;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          gap: 20px;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .btn-learn-more,
        .btn-get-started {
          padding: 15px 30px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          outline: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-learn-more {
          background: transparent;
          color: #2dd4bf;
          border: 2px solid #2dd4bf;
        }

        .btn-get-started {
          background: linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%);
          color: white;
          border: 2px solid transparent;
        }

        .btn-learn-more:hover,
        .btn-get-started:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(45, 212, 191, 0.3);
        }

        .btn-learn-more:hover {
          background: linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%);
          color: white;
        }

        .btn-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 1.2rem;
        }

        .btn-learn-more:hover .btn-arrow,
        .btn-get-started:hover .btn-arrow {
          transform: translateX(5px);
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Statistics Section */
        .statistics-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 50px;
        }

        .stat-box {
          background: linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%);
          color: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transform: translateY(20px);
          opacity: 0;
          animation: slide-up-stats 1s ease-out forwards;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stat-box:nth-child(2) {
          animation-delay: 0.2s;
        }

        .stat-box::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
        }

        .stat-box:hover::before {
          animation: shine-effect 0.6s ease-in-out;
        }

        .stat-box:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(45, 212, 191, 0.3);
        }

        @keyframes shine-effect {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes slide-up-stats {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 10px;
          display: block;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          color: white;
          margin: 0 0 10px 0;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.4;
          margin: 0;
          color: white;
        }

        /* Right Column - Carousel */
        .banner-col-right {
          position: relative;
          display: flex;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          height: 830px;
          min-height: 830px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .carousel-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/carousalBG.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .carousel-content {
          position: relative;
          margin-top: 30rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px;
          flex: 1;
        }

        .carousel-items-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-active-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 90%;
          padding: 30px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          animation: fade-in-item 0.5s ease-in-out;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        @keyframes fade-in-item {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carousel-text-area {
          flex: 1;
        }

        .carousel-main-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .carousel-sub-title {
          font-size: 18px;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .carousel-next-arrow {
          font-size: 32px;
          background: linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          transition: transform 0.3s ease;
          user-select: none;
          font-weight: bold;
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 50px;
          min-height: 50px;
          margin-left: 20px;
        }

        .carousel-next-arrow:hover {
          transform: translateX(5px) scale(1.1);
          background: rgba(45, 212, 191, 0.1);
        }

        .carousel-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          gap: 12px;
          z-index: 10;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
          position: relative;
        }

        .carousel-dot:hover {
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.1);
        }

        .carousel-dot-active {
          background: linear-gradient(
            135deg,
            #2dd4bf 0%,
            #0891b2 100%
          ) !important;
          transform: scale(1.4);
          box-shadow: 0 0 15px rgba(45, 212, 191, 0.6);
        }

        .carousel-dot-active:hover {
          background: linear-gradient(
            135deg,
            #2dd4bf 0%,
            #0891b2 100%
          ) !important;
          transform: scale(1.4);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .banner-row {
            grid-template-columns: 1fr;
            gap: 2rem;
            min-height: auto;
          }

          .hygiene-content-card {
            padding: 30px 20px;
            margin: 0 10px;
            height: auto;
          }

          .main-heading {
            font-size: 2.5rem;
          }

          .main-description {
            font-size: 1rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn-learn-more,
          .btn-get-started {
            width: 100%;
            justify-content: center;
          }

          .statistics-section {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .stat-box {
            padding: 30px 20px;
          }

          .stat-value {
            font-size: 2.5rem;
          }

          .carousel-content {
            padding: 20px;
          }

          .carousel-main-title {
            font-size: 22px;
          }

          .carousel-sub-title {
            font-size: 16px;
          }

          .carousel-active-item {
            padding: 20px;
            max-width: 95%;
          }

          .carousel-next-arrow {
            font-size: 24px;
            min-width: 40px;
            min-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 2rem;
          }

          .stat-value {
            font-size: 2rem;
          }

          .home-banner-wrapper {
            margin-right: 1rem;
          }

          .carousel-wrapper {
            height: 400px;
            min-height: 400px;
          }

          .carousel-main-title {
            font-size: 20px;
          }

          .carousel-sub-title {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner2;
