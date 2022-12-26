import React from "react";
import Job from "../../components/Job";
import MiniBanner from "../../components/MiniBanner";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import { Container, Grid, Hidden } from "@mui/material";
import Partner from "../about/Partner";
const JobList = () => {
  return (
    <>
      <MiniBanner text1="Job List" text2="Home" text3="Job List" />
      <div className="mt-20">
        <Container>
          <div className=" flex justify-center w-full">
            <div className="mt-10">
              {" "}
              <Job />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default JobList;
