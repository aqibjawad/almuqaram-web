import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

// Styled Components
const HomeWorkWrapper = styled.div`
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }

  @media (max-width: 576px) {
    margin-right: 0.5rem;
  }
`;

const HomeWorkCard = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    min-height: 450px;
    padding: 1.5rem;
  }

  @media (max-width: 992px) {
    min-height: 400px;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 350px;
  }

  @media (max-width: 576px) {
    padding: 0.75rem;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HomeWorkCard2 = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 2rem;
  background-color: #3b7174;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    min-height: 450px;
    padding: 1.5rem;
  }

  @media (max-width: 992px) {
    min-height: 400px;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 350px;
  }

  @media (max-width: 576px) {
    padding: 0.75rem;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HomeWorkTitle = styled.div`
  font-weight: 800;
  font-size: clamp(24px, 4vw, 30px);
  line-height: 100%;
  color: #1c3a3c;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CustomAccordion = styled.div`
  margin: 2rem 0;
  flex-grow: 1;
`;

const AccordionItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 0;
  cursor: pointer;
  position: relative;
  gap: 1rem;

  &.active {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: black;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 1rem;

  @media (max-width: 576px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.875rem;
  }
`;

const StepTitle = styled.h3`
  margin: 0;
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 600;
  color: #1d3547;
  line-height: 1.3;
`;

const AccordionContent = styled.div`
  padding: 0.5rem 0 1rem 3rem;
  color: #555;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.5;
  max-height: ${(props) => (props.isActive ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (max-width: 992px) {
    padding-left: 2.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  @media (max-width: 576px) {
    padding-left: 1.5rem;
  }
`;

const HomeWorkBtn = styled.div`
  width: 100%;
  max-width: 258px;
  border-radius: 8px;
  padding: 15px 30px;
  background-color: #30afb8;
  font-weight: 700;
  font-size: clamp(18px, 3vw, 24px);
  line-height: 130%;
  color: white;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2a9aa3;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 24px;
  }

  @media (max-width: 576px) {
    max-width: 200px;
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const HomeWorkLearn = styled.div`
  font-weight: 700;
  font-size: clamp(18px, 3vw, 24px);
  line-height: 130%;
  text-decoration: underline;
  color: #1c3a3c;
  margin-top: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #30afb8;
  }
`;

const HomeWorkCards2 = styled.div`
  width: 100%;
  max-width: 417px;
  min-height: 464px;
  border-radius: 10px;
  padding: 32px 21px;
  background-color: #f4f5f0;
  box-shadow: 0px 0px 18.4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1rem;

  @media (max-width: 1200px) {
    max-width: 350px;
    min-height: 400px;
    padding: 24px 16px;
  }

  @media (max-width: 992px) {
    max-width: 320px;
    min-height: 380px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    min-height: 320px;
    padding: 20px 12px;
  }

  @media (max-width: 576px) {
    max-width: 250px;
    min-height: 280px;
    padding: 16px 8px;
    margin: 0 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 220px;
    min-height: 260px;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  max-width: 375px;
  height: auto;
  aspect-ratio: 375/329;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 576px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 180px;
  }
`;

const WorkProductName = styled.div`
  font-weight: 600;
  font-size: clamp(20px, 3vw, 24px);
  line-height: 100%;
  color: #31300e;
  margin-top: 1rem;
`;

const WorkBrandName = styled.div`
  font-weight: 500;
  font-size: clamp(16px, 2.5vw, 20px);
  line-height: 100%;
  color: #31300e;
  margin-top: 0.5rem;
`;

const HomeWork = () => {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  // Accordion data
  const steps = [
    {
      number: 1,
      title: "Choose Your Products",
      content:
        "Select from a wide range of high-quality hygienic products trusted by global clients.",
    },
    {
      number: 2,
      title: "Customize Your Brand",
      content:
        "Add your brand logo, colors, and packaging preferences to create your unique product line.",
    },
    {
      number: 3,
      title: "We Manufacture & Deliver",
      content:
        "Our team handles production, quality control, and delivers your branded products to your doorstep.",
    },
  ];

  return (
    <HomeWorkWrapper id="HomeWork">
      <Row>
        <Col>
          <HomeWorkCard className="mt-5">
            <HomeWorkTitle>How It Works</HomeWorkTitle>

            <CustomAccordion>
              {steps.map((step) => (
                <AccordionItem key={step.number}>
                  <AccordionHeader
                    className={activeStep === step.number ? "active" : ""}
                    onClick={() => toggleStep(step.number)}
                  >
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                  </AccordionHeader>
                  <AccordionContent isActive={activeStep === step.number}>
                    <p>{step.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </CustomAccordion>

            <HomeWorkBtn>Get Started</HomeWorkBtn>
            <HomeWorkLearn>Learn More</HomeWorkLearn>
          </HomeWorkCard>
        </Col>
        <Col>
          <HomeWorkCard2 className="mt-5">
            <Marquee
              className="mt-5"
              gradient={false}
              style={{ overflow: "hidden" }}
            >
              <HomeWorkCards2>
                <WorkImage src="/workImage-1.png" alt="work image" />
                <div>
                  <WorkProductName>Product Name</WorkProductName>
                  <WorkBrandName>Brand Name</WorkBrandName>
                </div>
              </HomeWorkCards2>
            </Marquee>
          </HomeWorkCard2>
        </Col>
      </Row>
    </HomeWorkWrapper>
  );
};

export default HomeWork;
