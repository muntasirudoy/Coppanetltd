import React from 'react'
import img1 from '../assets/images/bg/blog31.png'
const BlogCard = ({img,title,subTitle,para,date,link}) => {
  return (
    <div className="swiper-slide w-full">
                  <div
                    className="single-blog-2 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <img src={img} className="blog-img" alt="image" />
                    <a href={link}>
                      <div className="content">
                        <span>{subTitle}</span>
                        <h4>
                          <a href= {link}>
                           {title}
                          </a>
                        </h4>
                        <p className="para">
                         {para}
                        </p>
                        <div className="meta">
                          <i className="bi bi-stopwatch"></i>
                          <span>{date}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
  )
}

export default BlogCard