import React, { useState, useEffect } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

const WebsiteLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default WebsiteLayout;
