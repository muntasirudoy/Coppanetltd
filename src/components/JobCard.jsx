import React from "react";
import img1 from "../assets/images/icons/job-icon1.svg";
import img2 from "../assets/images/icons/location-prm2.svg";
import img3 from "../assets/images/icons/time-prm2.svg";
import { Link } from "react-router-dom";

const JobCard = ({ para, location, time, leftTime, title }) => {
  return (
    <div className="w-full">
      <div
        className="jobpost-item hover-border2 wow fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
      >
        <div className="job-header">
          <div className="icon">
            <img src={img1} alt="image" />
          </div>
          <h4 className="title">
            <a href="job-details.html">{title}</a>
          </h4>
        </div>
        <div className="job-body">
          <p className="para">{para}</p>
          <ul className="job-meta">
            <li className=" flex">
              <img src={img2} alt="image" />
              {location}
            </li>
            <li className=" flex">
              <img src={img3} alt="image" />
              {time}
            </li>
          </ul>
        </div>
        <div className="job-footer">
          <div className="eg-btn btn--primary2-light btn--sm">{leftTime}</div>
            <a href="https://forms.gle/sJUbHHUrxE4sZtLN7">
            <button className="button-87-1"> APPLY NOW</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
