import React from "react";
import { bannerText, bannerBtn } from "./bannerInfo";
import Button from "./Button";
import img1 from "../assets/images/icons/banner5-tirang1.svg";
import img2 from "../assets/images/icons/banner5-tirang2.svg";
import img3 from "../assets/images/icons/banner5-tirang4.svg";
import img4 from "../assets/images/bg/banner5-vector-left.png";
import img5 from "../assets/images/bg/banner5-vector.png";
import img6 from "../assets/images/bg/banner5-image.png";
import img7 from "../assets/images/bg/about4-img.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Grid, Hidden } from "@mui/material";

const Banner = ({ bannerText }) => {
  return (
    <>
      <div class="banner-section5 py-16 xs:px-4">
        <ul class="banner-social style-2 gap-4">
          <li>
            <a href="https://www.facebook.com/coppanet">
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/coppanet-ltd">
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/coppanetltd/">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <img src={img1} class="banner5-tirang1 img-fluid" alt="image" />
        <img src={img2} class="banner5-tirang2 img-fluid" alt="image" />
        <img src={img3} class="banner5-tirang3 img-fluid" alt="image" />
        <img src={img2} class="banner5-tirang4 img-fluid" alt="image" />
        <img src={img4} class="banner5-tirang5 img-fluid" alt="image" />
        <img src={img4} class="banner5-vector-left img-fluid" alt="image" />
        <img src={img5} class="banner5-vector img-fluid" alt="image" />
        <Container>
          <div class="row w-full flex justify-between items-center xs:mt-10">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div class="w-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="banner-content style-3 fadeInLeft"
                  >
                    <motion.p
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.7 }}
                    >
                      welcome to
                      <p className="!text-[#ff8453] inline-block bg-[#f89973]/10 px-3 rounded-sm">
                        Coppanet Ltd.
                      </p>
                    </motion.p>

                    <motion.h1
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      className="mt-1 xs:te"
                    >
                      Creative To Plan Your Business Company
                    </motion.h1>
                    <motion.p
                      class="para"
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                    >
                      We develop mobile application platforms across different
                      sectors including Healthcare, Travel and Tourism, Fintech
                      and E-Commerce. We implement state of the art machine
                      learning and recommendation systems for maximum
                      user-friendliness.
                    </motion.p>

                    <div class="button-group gap-4">
                      <Link to="/about">
                        <button className="button-86">Learn More</button>
                      </Link>
                      <Link to="/contact">
                        <button className="button-86 button-86-2">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </Grid>
              <Hidden mdDown>
                <Grid
                  className=" "
                  item
                  xs={0}
                  sm={0}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                >
                  <div class="w-full flex justify-end position-relative d-lg-block d-none">
                    {/* <div class="offer-image-area style-2">
                <img src={img6} class="img-fluid banner5-image" alt="image" />
              </div> */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.7 }}
                      className="col-xl-7 col-lg-6 wow fadeInLeft"
                    >
                      <img
                        src={img7}
                        class="img-fluid about4-image"
                        alt="image"
                      />
                    </motion.div>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
