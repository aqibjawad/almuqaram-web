import React from "react";
import HomeBanner from "./homeBanner";
import HomeBanner2 from "./honeBanner2";
import HomeCards from "./homeCards";
import Cards from "./cards";
import TrustedCompanies from "./trustedComp";
import HomeWork from "./homeWork";
import HomeRsult from "./homeResult";
import HomeAchievement from "./homeAchievements";
import HomeTestinomial from "./homeTestinomial";
// import HomeDemands from "./homeDeamds";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "5rem", marginLeft: "3rem" }}>
        <HomeBanner />
        <HomeBanner2 />
        <HomeCards />
        <Cards />
        <TrustedCompanies />
        <HomeWork />
        <HomeAchievement />
        <HomeRsult />
      </div>
      <HomeTestinomial />
      {/* <HomeDemands /> */}
    </div>
  );
};

export default Home;
