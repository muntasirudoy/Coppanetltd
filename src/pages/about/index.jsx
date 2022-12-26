import React from "react";

import CompanyActivities from "./CompanyActivities";
import Content from "./Content";
import MiniBanner from "../../components/MiniBanner";
import Partner from "./Partner";

const About = () => {
  return (
    <>
      <MiniBanner text1="About Us" text2="Home" text3="About us" />
      <Content />
      <CompanyActivities />
    </>
  );
};

export default About;
