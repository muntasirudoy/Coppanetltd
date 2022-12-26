import React from "react";
import img1 from "../../assets/images/bg/water-mark1.png";
import img2 from "../../assets/images/bg/water-mark2.png";
import { Container, Grid, Hidden } from "@mui/material";
const CompanyActivities = () => {
  return (
    <>
      <div className="activities-section pt-20 pb-20">
        <img src={img1} alt="image" className="img-fluid water-mark1" />
        <img src={img2} alt="image" className="img-fluid water-mark2" />
        <Container>
          <div className="row ">
            <div className="flex w-full justify-center">
              <div className="section-title primary5">
                <span>-Our Culture-</span>
                <h3>Our Company Activities</h3>
                <p className="para">We promote positive working environment</p>
              </div>
            </div>
          </div>
          <div className="row flex z-10 justify-center">
            <div className="activities-area w-full">
              <div
                className="company-vdo position-relative wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="video-play style-2">
                  <a
                    href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                </div>
              </div>
              <div
                className="company-counter wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row flex gap-4  justify-center">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                      <div
                        className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                      >
                        <div className="coundown d-flex flex-column">
                          <h2 className="odometer" data-odometer-final="450">
                            420
                          </h2>
                          <a href="#">Happy Customer</a>
                        </div>
                      </div>
                    </Grid>
                    <Grid xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                      <div
                        className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.4s"
                      >
                        <div className="coundown d-flex flex-column">
                          <h2 className="odometer" data-odometer-final="500">
                            50
                          </h2>
                          <a href="#">Project Completed</a>
                        </div>
                      </div>
                    </Grid>
                    <Grid xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                      <div
                        className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.6s"
                      >
                        <div className="coundown d-flex flex-column">
                          <h2 className="odometer" data-odometer-final="150">
                            36
                          </h2>
                          <a href="#">Team member</a>
                        </div>
                      </div>
                    </Grid>
                    <Grid xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                      <div
                        className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.8s"
                      >
                        <div className="coundown d-flex flex-column">
                          <h2 className="odometer" data-odometer-final="130">
                            5
                          </h2>
                          <a href="#">Awards Winner</a>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CompanyActivities;
