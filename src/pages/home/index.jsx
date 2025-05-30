import React from "react";
import HomeBanner from "./homeBanner";
import HomeBanner2 from "./honeBanner2";
import HomeCards from "./homeCards";
import Cards from "./cards";
import HomeWork from "./homeWork";
import HomeRsult from "./homeResult";
import HomeAchievement from "./homeAchievements";
import HomeTestinomial from "./homeTestinomial";
import HomeDemands from "./homeDeamds";
import TrustedCompanies from "../trustedCompany";
import ContactForm from "./homeContact";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "7rem", marginLeft: "3rem" }}>
        <HomeBanner />
        <HomeBanner2 />
        {/* <HomeCards /> */}
        <HomeWork />
        <HomeRsult />
      </div>
      {/* <HomeAchievement /> */}
      <TrustedCompanies />
      <Cards />
      <HomeTestinomial />
      <HomeDemands />
      <ContactForm /> 
    </div>
  );
};

export default Home;
