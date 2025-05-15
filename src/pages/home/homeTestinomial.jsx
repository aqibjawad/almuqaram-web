import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HomeTestimonial() {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      companyLogo: "/logo.png",
      personName: "Khalid Abu Hasan",
      personTitle: "Manager",
      personImage: "/person.jpg",
      quote: "Al Muqarram is a very professional company",
      description: "That we really enjoy working with. We like the technical expertise and your commitment to quality, on-time delivery and customer service.",
      buttonText: "Read customer story",
    },
    {
      id: 2,
      companyLogo: "/logo.png",
      personName: "Ahmed Al Ali",
      personTitle: "CEO",
      personImage: "/person.jpg",
      quote: "They always deliver high-quality results",
      description: "Your team's dedication to excellence has truly helped us meet our deadlines without compromising on quality.",
      buttonText: "Read customer story",
    },
    {
      id: 3,
      companyLogo: "/logo.png",
      personName: "Fatima Noor",
      personTitle: "Product Head",
      personImage: "/person.jpg",
      quote: "Great service and support",
      description: "I appreciate the responsive support and detailed documentation you provide. It makes our job much easier.",
      buttonText: "Read customer story",
    },
    {
      id: 4,
      companyLogo: "/logo.png",
      personName: "Hassan Zayed",
      personTitle: "Operations Director",
      personImage: "/person.jpg",
      quote: "Truly reliable partners",
      description: "Their efficiency and clear communication helped us overcome logistical challenges with ease.",
      buttonText: "Read customer story",
    },
    {
      id: 5,
      companyLogo: "/logo.png",
      personName: "Hassan Zayed",
      personTitle: "Operations Director",
      personImage: "/person.jpg",
      quote: "Truly reliable hundreds",
      description: "Their efficiency and clear communication helped us overcome logistical challenges with ease.",
      buttonText: "Read customer story",
    }
  ];

  // Calculate next and previous indices with circular navigation
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }
    return visibleItems;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const customStyles = `
    .testimonials-container {
      background-color: #1C3A3C;
      color: white;
      padding-bottom: 4rem;
    }
    .testimonial-base-card {
      background-color: #2A5552;
      height: 340px;
      border-radius: 12px;
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .testimonial-overlay-card {
      background-color: #6ACFC7;
      position: absolute;
      top: 15px;
      right: 10px;
      width: 50%;
      height: 90%;
      border-radius: 12px;
      z-index: 2;
    }
    .company-logo {
      position: absolute;
      top: 20px;
      left: 20px;
      height: 35px;
      z-index: 3;
    }
    .company-logo img {
      height: 100%;
      width: auto;
      filter: brightness(0) invert(1);
    }
    .profile-section {
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .author-image {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #6ACFC7;
    }
    .author-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .author-name {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
      color: white;
    }
    .author-title {
      font-size: 14px;
      color: #6ACFC7;
      font-weight: 400;
    }
    .testimonial-content {
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .testimonial-quote {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #2A5552;
    }
    .testimonial-description {
      font-size: 14px;
      line-height: 1.4;
      color: rgba(42, 85, 82, 0.9);
      margin-bottom: 20px;
      flex-grow: 1;
    }
    .read-more-button {
      background-color: #FFFFFF;
      border: none;
      color: #2A5552;
      padding: 10px 16px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.3s;
    }
    .read-more-button:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateX(4px);
    }
    .nav-button {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 2px;
    }
    .nav-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .carousel-row {
      margin-top: 2rem;
    }
    @media (max-width: 992px) {
      .testimonial-item {
        margin-bottom: 30px;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Container fluid className="testimonials-container py-5">
        <Row className="align-items-center mb-4">
          <Col xs={12} lg={8}>
            <h1 style={{ fontSize: '42px', fontWeight: '600', marginBottom: '10px' }}>
              Testimonials
            </h1>
            <p style={{ fontSize: '16px', opacity: '0.8', maxWidth: '350px' }}>
              See how others transformed their brands with on-demand fulfillment
            </p>
          </Col>
          <Col xs={12} lg={4} className="d-flex justify-content-lg-end justify-content-start gap-2 mt-4 mt-lg-0">
            <Button className="nav-button d-flex align-items-center justify-content-center" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </Button>
            <Button className="nav-button d-flex align-items-center justify-content-center" onClick={nextSlide}>
              <ChevronRight size={24} />
            </Button>
          </Col>
        </Row>

        {/* Multiple Testimonials Display */}
        <Row className="carousel-row">
          {visibleTestimonials.map((testimonial) => (
            <Col lg={4} md={6} xs={12} key={testimonial.id} className="testimonial-item">
              <div className="testimonial-base-card">
                <div className="company-logo">
                  <img src={testimonial.companyLogo} alt="Company Logo" />
                </div>
                
                <div className="profile-section">
                  <div className="author-image">
                    <img src={testimonial.personImage} alt={testimonial.personName} />
                  </div>
                  <div>
                    <div className="author-name">{testimonial.personName}</div>
                    <div className="author-title">{testimonial.personTitle}</div>
                  </div>
                </div>
                
                <div className="testimonial-overlay-card">
                  <div className="testimonial-content">
                    <div className="testimonial-quote">{testimonial.quote}</div>
                    <div className="testimonial-description">{testimonial.description}</div>
                    <Button className="read-more-button">{testimonial.buttonText}</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomeTestimonial;