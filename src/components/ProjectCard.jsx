import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, Hidden } from "@mui/material";
const ProjectCard = ({ appName, platform, imgTham, id, liveLink }) => {
  console.log(liveLink, "link");

  const navigate = (link) => {
    window.document.location.href = String(link);
  };

  return (
    <>
      <div
        className="portfolio-item1 style-4 bg-white w-[95%]"
        style={{ margin: "10px auto" }}
      >
        <div className="portfolio-img p-4">
          <img alt="image" className="h-full" src={imgTham} />
        </div>
        <div className="portfolio-content">
          <span>{platform}</span>
          <h4>
            <Link to={`/project-details/${id}`}>{appName}</Link>
          </h4>
          {liveLink ? (
            <span
              onClick={() => navigate(liveLink)}
              className="text-btn flex w-full"
            >
              Live Preview
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z" />
                <path d="M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z" />
              </svg>
            </span>
          ) : (
            <p className=" text-sm text-red-500">Coming soon</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
