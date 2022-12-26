import React from "react";
import Container from "../../components/Container";
import img1 from "../../assets/images/bg/sponsor1.png";
import img2 from "../../assets/images/bg/sponsor2.png";
import img3 from "../../assets/images/bg/sponsor3.png";
import img4 from "../../assets/images/bg/sponsor5.png";
import img5 from "../../assets/images/bg/sponsor6.png";
import img6 from "../../assets/images/bg/sponsor4.png";
const Partner = () => {
  return (
    <>
      <div className="sponsor-section pb-20 mt-10">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-content-lg-start justify-content-center">
              <div className="section-title primary5 text-start mb-0">
                <span>-Our Partners-</span>
                <h3 className="mb-0">People Who Trust Us</h3>
              </div>
            </div>
          </div>
          <div className="row flex justify-content-center position-relative ">
            <div
              className="swiper sponsor-slider swiper-fix wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="swiper-wrapper flex">
                <div className="swiper-slide ">
                  <a href="#" className="single-sponsor ">
                    <img src={img1} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img2} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img3} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img4} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img5} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img6} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img2} alt="image" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src={img4} alt="image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Partner;
