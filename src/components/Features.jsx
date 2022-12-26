import React, { useRef } from "react";

import TitleFive from "./TitleFive";
import img1 from "../assets/images/f-01.png";
import { motion, useScroll } from "framer-motion";
import { Container, Grid, Hidden } from "@mui/material";
import "boxicons";
const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div class="features xs:mt-20 xs:py-0 sm:py-0 md:py-[50px] py-[100px]">
      <Container>
        <div className="w-full xs:px-3 sm:px-3 md:px-0 flex justify-between">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <div className="w-full flex justify-content-xl-start flex-col justify-content-center">
                <div
                  className="about3-content style-4 wow fadeInRight"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <motion.p>
                      <span>-Features-</span>
                    </motion.p>
                    <motion.h3 className=" !xs:font-[30px] !sm:font-[30px] !md:font-[35px]">
                      The reason why our solution is different and more
                      effective than others
                    </motion.h3>
                    <motion.p className="para">
                      Quickly incubate functional channels with
                      multidisciplinary architectures authoritatively fabricate.
                    </motion.p>
                  </motion.div>
                </div>
                <div>
                  <motion.ul class="list-unstyled mt-5">
                    <motion.li
                      initial={{ x: -200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      animate={{ background: "var(--action)" }}
                      class="flex align-items-start mb-4"
                    >
                      <div class="icon-box rounded mt-4">
                        <i class="bx bx-shape-square !bg-[#f25767]"></i>
                      </div>
                      <div class="icon-content">
                        <h3 class="xs:text-[24px] sm:text-[24px] md:text-[26px] font-semibold">
                          Pixel Perfect Design
                        </h3>
                        <p className=" text-sm text-gray-600">
                          Progressively foster enterprise-wide systems whereas
                          equity invested web-readiness harness installed.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      initial={{ x: 300, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      class="flex align-items-start mb-4"
                    >
                      <div class="icon-box rounded mt-4">
                        <i class="bx bxl-shopify bg-[#8d7eff]"></i>
                      </div>
                      <div class="icon-content">
                        <h3 class=" xs:text-[24px] sm:text-[24px] md:text-[26px] font-semibold">
                          Unique &amp; Minimal Design
                        </h3>
                        <p className=" text-sm text-gray-600">
                          Dramatically administrate progressive metrics without
                          error-free globally simplify standardized.
                        </p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </Grid>

            <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, rotate: [5, 0] }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className=" w-full xs:mt-4 sm:mt-4 md:mt-0 md:p-10  flex justify-end items-center"
              >
                <img width="100%" src={img1} alt="" />
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Features;
