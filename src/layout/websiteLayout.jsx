import React, { useState, useEffect } from "react";

import Header from "../components/header/header";

const WebsiteLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{marginTop:"5rem", marginLeft:"3rem"}}>{children}</div>
    </React.Fragment>
  );
};

export default WebsiteLayout;
