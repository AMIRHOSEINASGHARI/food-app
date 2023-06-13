import React from "react";
import LandingPage from "../modules/LandingPage";
import Attributes from "../modules/Attributes";
import Deffinition from "../modules/Deffinition";
import Guid from "../modules/Guid";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Attributes />
      <Deffinition />
      <Guid />
    </div>
  );
};

export default HomePage;
