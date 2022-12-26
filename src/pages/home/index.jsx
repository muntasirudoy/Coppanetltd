import React from "react";
import About from "../../components/About";
import Banner from "../../components/Banner";
import { bannerText } from "../../components/bannerInfo";
import Blogs from "../../components/Blogs";
import Clients from "../../components/Clients";
import Container from "../../components/Container";
import Job from "../../components/Job";
import JoinUs from "../../components/JoinUs";
import Projects from "../../components/Projects";
import Sponsor from "../../components/Sponsor";
import Team from "../../components/Team";
import Features from "../../components/Features";

const Home = ({}) => {
  return (
    <div>
      <Banner />
      <Sponsor />
      <About />
      <Features />
      <Projects />
      <Team />
      <Clients />
      <Blogs />
      <Job />
      <JoinUs />
    </div>
  );
};

export default Home;
