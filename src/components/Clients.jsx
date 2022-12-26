import React from "react";
import { Container, Grid, Hidden } from "@mui/material";
import img1 from "../assets/images/bg/client21.png";
import img2 from "../assets/images/icons/quote4.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const Clients = () => {
  return (
    <>
      <div className="testimonial-section4">
        <Container>
          <div className="row flex justify-between">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div className="w-full">
                  <div className=" text-white text-start">
                    <span>-Testimonial-</span>
                    <h3 className="text-gray-50 text-[46px]">
                      Our Client Feedback
                    </h3>
                  </div>
                  <div className="testimonial-area mt-8">
                    <div className="swiper testimonial-slider4 swiper-fix">
                      <div className="swiper-wrapper flex">
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={20}
                          slidesPerGroup={1}
                          loop={true}
                          loopFillGroupWithBlank={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper w-full pb-12"
                        >
                          <SwiperSlide>
                            <div className="swiper-slide">
                              <div
                                className="testimonial-single3 style-3 wow fadeInUp"
                                data-wow-duration="1.5s"
                                data-wow-delay=".2s"
                              >
                                <div className="author-area">
                                  <div className="author gap-3">
                                    <div className="author-img">
                                      <img src={img1} alt="image" />
                                    </div>
                                    <div className="author-desig">
                                      <h5>Johan Martin Sr</h5>
                                      <p>Manager</p>
                                    </div>
                                  </div>
                                  <img src={img2} alt="image" />
                                </div>
                                <p className=" text-gray-600 !text-sm !leading-6 !font-normal">
                                  You have been absolutely wonderful for Kinship
                                  Center, & I can't thank you enough for all
                                  your tremendous skills, support and patience
                                  specia lly during our merger. You will always
                                  be Kinship Center's vendor of choice!
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial4-pagination"></div>
                        <div className="slider-arrows2 style-4 text-center d-flex gap-4">
                          <div
                            className="testi-prev4 swiper-prev-arrow"
                            tabindex="0"
                            role="button"
                            aria-label="Previous slide"
                          >
                            <i className="bi bi-arrow-left"></i>
                          </div>
                          <div
                            className="testi-next4 swiper-next-arrow"
                            tabindex="0"
                            role="button"
                            aria-label="Next slide"
                          >
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                <div className="w-full xs:ml-0 sm:ml-0 md:ml-10 ml-10">
                  <div
                    className="company-counter style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="row gap-3 flex-wrap flex justify-content-center">
                      <div className="w-[48%]">
                        <div
                          className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.2s"
                        >
                          <div className="coundown">
                            <h2 className="odometer" data-odometer-final="450">
                              <CountUp end={60} redraw={true}>
                                {({ countUpRef, start }) => (
                                  <VisibilitySensor
                                    onChange={start}
                                    delayedCall
                                  >
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                              +
                            </h2>
                            <span>{/* <i className="bx bx-plus"></i> */}</span>
                            <br />
                            <a href="#">Project</a>
                          </div>
                        </div>
                      </div>
                      <div className="w-[48%]">
                        <div
                          className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.4s"
                        >
                          <div className="coundown">
                            <h2 className="odometer" data-odometer-final="50">
                              <CountUp end={100} redraw={true}>
                                {({ countUpRef, start }) => (
                                  <VisibilitySensor
                                    onChange={start}
                                    delayedCall
                                  >
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                              +
                            </h2>
                            <span>{/* <i className="bx bx-plus"></i> */}</span>{" "}
                            <br />
                            <a href="#">Customer</a>
                          </div>
                        </div>
                      </div>
                      <div className="w-[48%]">
                        <div
                          className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.6s"
                        >
                          <div className="coundown">
                            <h2 className="odometer" data-odometer-final="963">
                              <CountUp end={120} redraw={true}>
                                {({ countUpRef, start }) => (
                                  <VisibilitySensor
                                    onChange={start}
                                    delayedCall
                                  >
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                              +
                            </h2>
                            <br />
                            <a href="#">Success</a>
                          </div>
                        </div>
                      </div>
                      <div className="w-[48%]">
                        <div
                          className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.8s"
                        >
                          <div className="coundown">
                            <h2 className="odometer" data-odometer-final="50">
                              <CountUp end={20} redraw={true}>
                                {({ countUpRef, start }) => (
                                  <VisibilitySensor
                                    onChange={start}
                                    delayedCall
                                  >
                                    <span ref={countUpRef} />
                                  </VisibilitySensor>
                                )}
                              </CountUp>
                            </h2>
                            <span>{/* <i className="bx bx-plus"></i> */}</span>{" "}
                            <br />
                            <a href="#">Awards</a>
                          </div>
                        </div>
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

export default Clients;
