import React from "react";
import img1 from "../assets/images/bg/section-bg1.png";
import img2 from "../assets/images/bg/trq.jpeg";
import img3 from "../assets/images/bg/sharif.jpeg";
import img4 from "../assets/images/bg/team1.jpg";
import img5 from "../assets/images/bg/ud.jpeg";
import img6 from "../assets/images/bg/saif.jpeg";
import { Container, Grid, Hidden } from "@mui/material";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
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

const Team = () => {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <img src={img1} alt="image" className="img-fluid water-mark1" />
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8 flex justify-center">
              <motion.ul>
                <div className="section-title primary5 xs:w-full sm:w-full md:w-[500px] lg:w-[650px] ">
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.3 }}
                  >
                    <span>-Our Team-</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.4 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <h3>Our Creative Minds</h3>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ bounce: 2, duration: 0.5 }}
                  >
                    <p className="para xs:text-[14px] sm:text-[14px] md:text-[16px]">
                      We believe teamwork makes the dream work. Our station has
                      no door. We get immersed in conversation and jot down the
                      ideas.
                    </p>
                  </motion.li>
                </div>
              </motion.ul>
            </div>
          </div>
          <div className="row flex justify-between  ">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper w-full relative pb-12 "
              breakpoints={{
                320: {
                  width: 380,
                  slidesPerView: 1,
                },
                576: {
                  width: 640,
                  slidesPerView: 2,
                },

                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                992: {
                  width: 992,
                  slidesPerView: 3,
                },
                1240: {
                  width: 1240,
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide className="pb-12">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                  viewport={{}}
                >
                  <TeamCard
                    name="Muballig Karim"
                    designation="Operations Manager"
                    img={img4}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Shariful Islam"
                    designation="Social Media Manager"
                    img={img3}
                  />
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Tarequl Islam"
                    designation="Full-Stack Developer"
                    img={img2}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Muntasir Udoy"
                    designation="Frontend Developer"
                    img={img5}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ bounce: 2, duration: 0.6 }}
                >
                  <TeamCard
                    name="Saif Rahman"
                    designation="Frontend Developer"
                    img={img6}
                  />
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Team;
