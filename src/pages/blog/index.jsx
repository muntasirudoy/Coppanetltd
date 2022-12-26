import React from "react";
import Container from "../../components/Container";
import MiniBanner from "../../components/MiniBanner";
import Blogs from "../../components/Blogs";
import Projects from "../../components/Projects";
import img2 from "../../assets/images/bg/portfolio12.png";
import allproject from "../../assets/projects.json";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return <div>
     <MiniBanner text1="What's Happening" text2="Home" text3="Blogs" />
      <Container>
        <div className=" flex w-full justify-between py-[100px] flex-wrap gap-y-5">

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        
        </div>
      </Container>
  </div>;
};

export default Blog;
