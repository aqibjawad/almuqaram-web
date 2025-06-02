import React from "react";
import "./about.css";
import AboutBanner from "./aboutBanner";
import AboutCare from "./aboutCare";
import Certification from "../certification/certification";
import AboutSection from "./aboutSection";
import TrustedCompanies from "./aboutCompanies";
import ProductDevelopment from "./aboutDevelopment";
import AboutBrand from "./aboutBrands";
import HomeAchievement from "../home/homeAchievements";
import ProductShowcase from "./aboutShowCase";

const AboutUs = () => {
  return (
    <div id="about" className="abouut">
      <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <div className="aboutSectionIndex">
          <AboutBanner />
        </div>
        <ProductDevelopment />
        <ProductShowcase />
        {/* <AboutCare /> */}
        <TrustedCompanies />
      </div>
      <AboutSection />
      <Certification />
      <AboutBrand />
      {/* <HomeAchievement /> */}
    </div>
  );
};

export default AboutUs;
