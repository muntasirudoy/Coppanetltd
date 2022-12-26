import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Hidden } from "@mui/material";
const MiniBanner = ({ text1, text2, text3, para }) => {
  return (
    <>
      <div className="inner-banner mt-[75px]">
        {/* <img
          src="assets/images/bg/inner-bannerdot.png"
          className="inner-bannerdot"
          alt="image"
        />
        <img
          src="assets/images/bg/inner-bannerwave.png"
          className="inner-bannerwave"
          alt="image"
        /> */}
        <a
          className="down-arrow-icon flex justify-center items-center"
          href="#about"
        >
          <svg viewBox="0 0 14 26" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.8182 18.469L7.24862 25.7462L0.679032 18.469C0.272584 18.0188 0.592074 17.3 1.19862 17.3L6.74862 17.3L6.74862 1C6.74862 0.723857 6.97248 0.5 7.24862 0.5C7.52477 0.5 7.74862 0.723857 7.74862 1L7.74862 17.3L13.2986 17.3C13.9052 17.3 14.2247 18.0188 13.8182 18.469Z"
            />
          </svg>
        </a>
        <Container>
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
              <h2 className="inner-banner-title wow fadeInLeft">{text1}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb gap-3 flex">
                  <li className="breadcrumb-item">
                    <Link to="/"> {text2}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {text3}
                  </li>
                </ol>
                <div className="w-full flex justify-center mt-5">
                  <p className="w-[60%] text-white font-light ">
                    {para && para}
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MiniBanner;
