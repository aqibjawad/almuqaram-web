import React from "react";
import HomeBanner from "./homeBanner";
import HomeBanner2 from "./honeBanner2";
import HomeCards from "./homeCards";
import TrustedCompanies from "./trustedComp";
import HomeWork from "./homeWork";
import HomeRsult from "./homeResult";
import HomeAchievement from "./homeAchievements";
import HomeTestinomial from "./homeTestinomial";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <HomeBanner />
        <HomeBanner2 />
        <HomeCards />
        <TrustedCompanies />
        <HomeWork />
        <HomeAchievement />
        <HomeRsult />
      </div>
      <HomeTestinomial />
    </div>
  );
};

export default Home;
