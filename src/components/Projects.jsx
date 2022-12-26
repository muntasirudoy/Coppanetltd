import React, { useState, useRef, useEffect } from "react";
import { Container, Grid, Hidden } from "@mui/material";
import img1 from "../assets/images/bg/portfolio17.png";

import img4 from "../assets/images/bg/rectangle-dot.svg";
import ProjectCard from "./ProjectCard";
import ProjectArrow from "./ProjectArrow";
import TitleFive from "./TitleFive";
import data from "../assets/projects.json";
import { motion, useInView } from "framer-motion";

const item = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: [0, 1, 0],
  },
  transition: {
    delayChildren: 0.1,
    staggerChildren: 0.1,
  },
};
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const [Projects] = useState(data.filter((e) => e.id >= 0 && e.id <= 2));

  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(isInView);
  return (
    <div
      className="portfolio-section5 position-relative pt-20 mt-[80px] pb-[80px]"
      ref={ref}
    >
      <img src={img4} className="rectangle-dot1" alt="image" />
      <img src={img4} className="rectangle-dot2" alt="image" />
      <Container>
        <div className="row flex justify-center">
          <TitleFive
            heading="Best Work Showcase"
            subheading="-Our Project-"
            para="Coppanet ltd. has already created multiple successful digital businesses, especially in the fintech
             industry."
          />
        </div>
        <div className="row position-relative justify-content-center" ref={ref}>
          <div className="swiper  portfolio-slider1 swiper-fix">
            <div className="anim swiper-wrapper flex  w-full gap-5 justify-between">
              <motion.ul
                className="flex flex-wrap gap-5 w-full"
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                {Projects.map((e, index) => (
                  <motion.li
                    variants={item}
                    className=" cursor-pointer xs:w-full sm:w-full md:w-2/4 lg:w-[32%]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7 }}
                  >
                    <ProjectCard
                      appName={e.appName}
                      platform={e.platform}
                      imgTham={e.imgTham}
                      liveLink={e.liveLink}
                      id={e.slug}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <div className="slider-arrows text-center d-lg-flex d-none  justify-content-between">
            {/* <ProjectArrow /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
