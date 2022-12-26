import React from "react";
import img1 from "../assets/images/bg/blog31.png";
import img2 from "../assets/images/bg/blog32.png";
import img3 from "../assets/images/bg/blog33.png";
import img4 from "../assets/images/bg/water-mark4.png";
import BlogCard from "./BlogCard";
import TitleFive from "./TitleFive";
import img5 from "../assets/images/bg/programming.jpg";
import img6 from "../assets/images/bg/blog31.png";
import { Container, Grid } from "@mui/material";

const Blogs = () => {
  return (
    <>
      <div className="blog-section3 position-relative overflow-hidden pt-120 pb-120">
        <img src={img4} alt="image" className="service-watermark" />
        <Container>
          <div className="row">
            <div className="w-full flex justify-center">
              <TitleFive
                heading="-Our Blog-"
                subheading="Latest News Feeds"
                para=" Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences."
              />
            </div>
          </div>
          <div className="row mt-5 justify-content-center position-relative">
            <div className="swiper blog-slider swiper-fix">
              <div className="swiper-wrapper flex">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <BlogCard
                      img={img6}
                      title="What Does a Product Manager Do? Your Complete Career Guide"
                      subTitle="Ui/Ux Design"
                      para="The product manager job title is fast becoming on of the hottest business."
                      date="Februay 24, 2022"
                      link="https://careerfoundry.com/en/blog/product-management/what-does-a-product-manager-do/#:~:text=The%20role%20of%20the%20product,in%20line%20with%20business%20goals.'"
                    ></BlogCard>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    className=" xs:mt-5 sm:mt-5 md:mt-0"
                  >
                    <BlogCard
                      img={img5}
                      title="Consistency Tips for Developers That Actually Work"
                      subTitle="Programming"
                      para="Inconsistency is the most common error made by developers. Follow these simple tips to stay consistent and develop a coding habit. Let's start!"
                      date="December 2, 2022"
                      link="https://dev.to/codewithvoid/consistency-tips-for-developers-that-actually-work-3m5a"
                    ></BlogCard>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
