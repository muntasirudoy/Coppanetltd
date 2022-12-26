import React from "react";
import { Container, Grid, Hidden } from "@mui/material";
import MiniBanner from "../../components/MiniBanner";
import ProjectCard from "../../components/ProjectCard";
import Projects from "../../components/Projects";
import img2 from "../../assets/images/bg/portfolio12.png";
import allproject from "../../assets/projects.json";
const OurProjects = () => {
  return (
    <div className="  bg-red-50">
      <MiniBanner
        text1="Our all Projects"
        text2="Home"
        text3="Projects"
        para="Coppanet ltd. has already
        created multiple successful digital businesses, especially in the
        fintech industry. The incredible minds of Coppanet are
        continuously reinventing fintech solutions to open up all kinds of
        potential for our customers - And YOU."
      />

      <Container>
        <div className=" flex justify-center w-full py-[100px]">
          {/* <div className="w-full flex justify-center ">
          </div> */}

          <Grid container>
            {allproject.map((e) => (
              <Grid xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <ProjectCard
                  appName={e.appName}
                  platform={e.platform}
                  imgTham={e.imgTham}
                  id={e.slug}
                  liveLink={e.liveLink}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
