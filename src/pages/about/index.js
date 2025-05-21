import React from "react";
import "./about.css"
import AboutBanner from "./aboutBanner";
import StatsSection from "./aboutStats";
import AboutCare from "./aboutCare";
import Certifications from "./aboutCertificate";
import AboutSection from "./aboutSection";
import TrustedCompanies from "./aboutCompanies";
import ProductDevelopment from "./aboutDevelopment";
import AboutBrand from "./aboutBrands";

const AboutUs = () => {
  return (
    <div id="about" className="abouut">
      <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <div className="aboutSectionIndex">
          <AboutBanner />
          <StatsSection />
        </div>
        <ProductDevelopment />
        <AboutCare />
        <Certifications />
        <AboutSection />
        <TrustedCompanies />
        <AboutBrand />
      </div>
    </div>
  );
};

export default AboutUs;
