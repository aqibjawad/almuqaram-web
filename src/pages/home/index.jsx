import React from "react";
import HomeBanner from "./homeBanner";
import HomeBanner2 from "./honeBanner2";
import HomeCards from "./homeCards";
import TrustedCompanies from "./trustedComp";
import HomeWork from "./homeWork";
const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeBanner2 />
      <HomeCards />
      <TrustedCompanies />
      <HomeWork />
    </div>
  );
};

export default Home;
