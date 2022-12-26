import React from "react";
import { Container, Grid, Hidden } from "@mui/material";
import img1 from "../../assets/images/bg/section-bg1.png";
import img2 from "../../assets/images/bg/about11.png";
import img3 from "../../assets/images/icons/medal-icon.svg";
import img4 from "../../assets/images/bg/about13.png";
import img5 from "../../assets/images/bg/section-bg1.png";
import img6 from "../../assets/images/icons/sun-icon.svg";
import img7 from "../../assets/images/icons/about-triangle.svg";
const Content = () => {
  return (
    <>
      <div className="about1-section pt-120 pb-120" id="about">
        <img src={img1} className="img-fluid section-bg1" alt="" />
        <Container>
          <div className="row flex justify-between gap-4">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div className="w-full order-1 ">
                  <div
                    className="about1-content wow fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <span>-Our Company-</span>
                    <h3>
                      We are committed to providing our customers with
                      exceptional.
                    </h3>
                    <p className="para">
                      We develop mobile application platforms across different
                      sectors including Healthcare, Travel and Tourism, At-home
                      service, Bakery, Financial Service and E-Commerce. We
                      implement state of the art machine learning and
                      recommendation systems fr maximum User-friendliness.
                    </p>
                    <ul className="about-list">
                      <li>Fast</li>
                      <li>Reliable</li>
                      <li>Secure</li>
                    </ul>

                    <h3>Ideas That Became Reality</h3>
                    <p className="para">
                      “COPPANET LTD”, is a digital business group operating from
                      Bangladesh, with 2 global registered offices in multiple
                      countries including Paris, and UK. We aim to build
                      exceptional experiences and futuristic solutions for
                      global audience. Through our multiple products and
                      services, Coppanet Ltd is already serving....
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div className="w-full order-2">
                  <div
                    className="about-images wow fadeInRight"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="row flex gap-0">
                      <div className="w-2/4">
                        <img
                          src={img2}
                          className="about11 img-fluid"
                          alt="image"
                        />
                        <div className="experience-tag">
                          <div className="tag-inner">
                            <img src={img3} alt="image" />
                            <h5>2+ Years Experience</h5>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/4 position-relative">
                        <img
                          src={img3}
                          className="about12 img-fluid"
                          alt="image"
                        />
                        <img
                          src={img4}
                          className="about13 img-fluid"
                          alt="image"
                        />
                        {/* <img src={img5} className="sun-icon" alt="image" /> */}
                        <img src={img6} className="about-dot" alt="image" />
                        <img
                          src={img7}
                          className="about-triangle"
                          alt="image"
                        />
                      </div>
                    </div>
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

export default Content;
