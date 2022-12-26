import React from "react";
import {Container,Grid} from "@mui/material"
import { Link } from "react-router-dom";


const JoinUs = () => {
  return (
    <>
      <div className="join-section pb-120">
        <Container>
          <div
            className="joinus-area d-flex align-items-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
          <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >  
            <div className=" justify-center row flex flex-col w-full items-center">
            
                <h2 className="text-center">We're Always Looking For Talented People Our Agency.</h2>

              <div className="flex justify-center">
              <Link  to="/job-list">
                <button className="button-87 "> JOIN US</button>
              </Link>               
              </div>
            </div>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default JoinUs;
