import React from "react";
import {Container, Grid} from "@mui/material"
import img1 from "../assets/images/icons/job-icon1.svg";
import img2 from "../assets/images/icons/location-prm2.svg";
import img3 from "../assets/images/icons/time-prm2.svg";
import img4 from "../assets/images/icons/job-icon2.svg";
import img5 from "../assets/images/icons/location-prm2.svg";
import img6 from "../assets/images/icons/time-prm2.svg";
import img7 from "../assets/images/icons/job-icon3.svg";
import img8 from "../assets/images/icons/location-prm2.svg";
import img9 from "../assets/images/icons/time-prm2.svg";
import JobCard from "./JobCard";
import { motion } from "framer-motion";
import TitleFive from "./TitleFive";
const Job = () => {
  return (
    <>
      <div className="job-section pb-20">
        <Container>
          <div className="row justify-content-center">
            <div className="flex justify-center">
              <TitleFive
                heading="Our Recent Job Post"
                subheading="- Our Jobs-"
                para=" "
              />
            </div>
          </div>

          <div className="row flex justify-between gap-6">
          <Grid xs={12} sm={12} md={2} lg={4} xl={4} xxl={4}>
          <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ bounce: 2, duration: 0.4, delay: 0.1 }}
              className=" w-full"
            >
              <JobCard
                para={`We are looking for Software Technical Lead having professional experience and deep knowledge on web application development (server-side frameworks like .NET Core and client-side frameworks/Library like Angular and React).`}
                location="Dhaka"
                time="Full Time"
                leftTime="1 Day Ago"
                title="Software Tech-Lead"
                
              />
            </motion.div>
          </Grid>
          
          </div>
        </Container>
      </div>
    </>
  );
};

export default Job;
