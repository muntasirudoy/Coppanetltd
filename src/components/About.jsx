import React from "react";
import img1 from "../assets/images/bg/about2-vector.png";
import img2 from "../assets/images/bg/about2-bg.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Grid, Hidden } from "@mui/material";
const item = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <>
      <div className="about-section2 pt-120 flex justify-between overflow-hidden">
        <img src={img1} alt="image" className="about2-vector img-fluid " />
        <Container>
          <div className="row xs:px-3  sm:px-3 md:px-0 w-full flex gap-12 gy-5 justify-between">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Hidden mdDown>
                <Grid xs={0} sm={0} md={0} lg={6} xl={6} xxl={6}>
                  <motion.div
                    initial={{ x: -400 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full pe-0 p-10 text-xl-start text-center"
                  >
                    <img src={img2} alt="image" className="img-fluid" />
                  </motion.div>
                </Grid>
              </Hidden>
              <Grid xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <div className="w-full flex justify-content-xl-start justify-content-center">
                  <div className="about3-content style-4 wow fadeInRight">
                    <motion.div
                      initial={{ x: 200 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <motion.p>
                        <span>-Our Company-</span>
                      </motion.p>
                      <motion.h3>
                        Software solution with omnichannel possibilities
                      </motion.h3>
                      <motion.h4 className="xs:text-[20px] sm:text-[20px] md:text-[22px]">
                        We’re committed to delivering the best software solution
                        for your businesses
                      </motion.h4>

                      <motion.p className="para mt-2 xs:text-[14px] sm:text-[14px] md:text-[16px]">
                        We develop mobile application platforms across different
                        sectors including Healthcare, Travel and Tourism,
                        At-home service, Bakery, Financial Service and
                        E-Commerce. We implement state of the art machine
                        learning and recommendation systems fr maximum
                        User-friendliness.
                      </motion.p>
                    </motion.div>

                    <motion.ul
                      className="about3-list style-2"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                    >
                      <motion.li
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        Fast
                      </motion.li>
                      <motion.li
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        Reliable
                      </motion.li>
                      <motion.li
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        Secure
                      </motion.li>
                    </motion.ul>
                    <Link to="/about">
                      <button className="button-87">More About</button>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
