import React from "react";
import img2 from "../assets/images/bg/team31.png";
import { motion } from "framer-motion";
const TeamCard = ({ name, designation, img }) => {
  return (
    <div className="single-team1 hover-border1 wow fadeInDown mr-3 xs:w-full sm:w-full md:w-[290px] ">
      <div className="team-image h-[320px]">
        <img src={img} alt="image" />
        <div className="social-area gap-3">
          <div className="social-plus flex justify-center items-center">
            <ion-icon size="small" name="chatbox-outline"></ion-icon>
          </div>
          <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
            <li>
              <a href="https://www.facebook.com/">
                <ion-icon size="small" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <ion-icon size="small" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <ion-icon size="small" name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="team-content">
        <motion.h4
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ bounce: 2, duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
          className=" text-xl"
        >
          {name}
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ bounce: 2, duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
          className=" text-sm text-gray-600"
        >
          {designation}
        </motion.p>
      </div>
    </div>
  );
};

export default TeamCard;
