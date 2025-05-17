import React from "react";
import AboutBanner from "./aboutBanner";
import StatsSection from "./aboutStats"
import TrustedCompanies from "./aboutCompanies";

const AboutUs = () => {
  return (
    <div id="about" className="abouut">
      <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <AboutBanner />
        <StatsSection />
        <TrustedCompanies />
      </div>
    </div>
  );
};

export default AboutUs;
