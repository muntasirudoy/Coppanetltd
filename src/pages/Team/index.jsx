import React from "react";
import MiniBanner from "../../components/MiniBanner";
import Team from "../../components/Team";
import TeamCard from "../../components/TeamCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import img2 from "../../assets/images/bg/trq.jpeg";
import img3 from "../../assets/images/bg/sharif.jpeg";
import img4 from "../../assets/images/bg/ud.jpeg";
import img1 from "../../assets/images/bg/team1.jpg";
import img5 from "../../assets/images/bg/saif.jpeg";
import { Container, Grid, Hidden } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const index = () => {
  return (
    <>
      <MiniBanner text1="Team Member" text2="Home" text3="Team" />
      <Container>
        <div className="row flex w-full justify-between gap-6 py-[100px] flex-wrap relative">
          <Grid container>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="w-[90%] mt-5">
                <div>
                  <h1 className=" text-[34px] font-semibold">
                    Meet Our Expertist
                  </h1>
                  <p className="para mt-4">
                    We believe teamwork makes the dream work. Our station has no
                    door. We get immersed in conversation and jot down the
                    ideas. We get involved in arguments and light the idea bulb
                    together to solve complex problems. There is no cubicle or
                    glass to block our stress from our mates. That’s how we are
                    building futuristic solutions.
                  </p>

                  <div className=" flex justify-between w-full mt-6">
                    <div className=" w-[170px] h-[90px] rounded-[10px] flex flex-col justify-center text-black font-medium items-center bg-[#f89973]/20">
                      <span>6+</span>
                      <span>Developers</span>
                    </div>
                    <div className=" w-[170px] h-[90px] rounded-[10px] flex flex-col justify-center text-black font-medium items-center bg-[#f89973]/20">
                      <span>2+</span>
                      <span>Marketing</span>
                    </div>
                    <div className=" w-[170px] h-[90px] rounded-[10px] flex flex-col justify-center text-black font-medium items-center bg-[#f89973]/20">
                      <span>1</span>
                      <span>Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.3 }}
                viewport={{}}
              >
                <TeamCard
                  name="Muballig Karim"
                  designation="Operations Manager"
                  img={img1}
                />
              </motion.div>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.4 }}
              >
                <TeamCard
                  name="Shariful Islam"
                  designation="Social Media Manager"
                  img={img3}
                />
              </motion.div>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.5 }}
              >
                <TeamCard
                  name="Tarequl Islam"
                  designation="Full-Stack Developer"
                  img={img2}
                />
              </motion.div>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.6 }}
              >
                <TeamCard
                  name="Muntasir Udoy"
                  designation="Frontend Developer"
                  img={img4}
                />
              </motion.div>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ bounce: 2, duration: 0.6, delay: 0.6 }}
              >
                <TeamCard
                  name="Saif Rahman"
                  designation="Frontend Developer"
                  img={img5}
                />
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default index;
