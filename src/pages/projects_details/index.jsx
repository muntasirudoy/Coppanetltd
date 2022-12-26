import React, { useState, useEffect } from "react";
import MiniBanner from "../../components/MiniBanner";

import Container from "../../components/Container";
import { Routes, Route, useParams } from "react-router-dom";
import projectdetailss from "../../assets/projects.json";
import img1 from "/manager01.png";

export const ProjectDetails = () => {
  const param = useParams();
  console.log(param);
  const [details, setDetails] = useState("");
  useEffect(() => {
    const data = projectdetailss.find((e) => e.slug == param.slug);
    setDetails(data);
    console.log(data);
  });

  const {
    clientsName,
    appName,
    category,
    completeDate,
    paraOne,
    paraTwo,
    paraThree,
    paraFour,
    headinOne,
    subHeadingTwo,
    headinTwo,
    headinThree,
    headinFour,
    list,
    release,
    usecase,
    technology,
    interfaces,
    development,
    imgCover,
  } = details;
  return (
    <>
      <MiniBanner
        text1={`${appName} Project Details`}
        text2="Home"
        text3="Projects Details"
      />
      <div class="project-details-section mt-20 pb-20" id="project-details">
        <Container>
          <div class="row flex justify-center gap-5">
            <div class="w-[65%]">
              <div class="proj-details-single">
                <img
                  src={`/${imgCover}`}
                  alt="image"
                  class="h-[470px] w-full"
                />

                <h4 className="mt-6 text-[32px]">{headinOne}</h4>
                <p class="para">{paraOne}</p>
                <div class="challenge-box">
                  <h4>{headinThree}</h4>
                  <p class="para">{paraThree}</p>
                  <ul class="challenge-list mt-5">
                    {list && list.map((e) => <li>{e}</li>)}
                  </ul>
                </div>
                <h4>{headinFour}</h4>
                <p class="para mb-0">{paraFour}</p>
              </div>
            </div>

            <div className="w-[35%]">
              <div className=" bg-gray-800 py-8 px-7 text-gray-100">
                <h1 className=" text-[30px] text-[#f89973]">
                  {appName} Specification
                </h1>
                <div className="flex justify-between mt-3">
                  <table>
                    <tr>
                      <td className=" text-gray-300">Project Name</td>
                      <td className=" text-gray-200">{appName}</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-300">Release</td>
                      <td className=" text-gray-200">{release}</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-300">Use case</td>
                      <td className=" text-gray-200">{usecase}</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-300">Technology</td>
                      <td className=" text-gray-200">{technology}</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-300">Interfaces</td>
                      <td className=" text-gray-200">{interfaces}</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-300">Development</td>
                      <td className=" text-gray-200">{development}</td>
                    </tr>
                    {/* <tr>
                      <td className=" text-gray-300">Others</td>
                      <td className=" text-gray-200">Giovanni Rovelli</td>
                    </tr> */}
                  </table>
                </div>
              </div>
              <div className=" flex gap-4 mt-4">
                <button className="button-87-details"> VISIT NOW</button>
                <button className="button-87-details"> Documentation</button>
              </div>
              <div class="proj-details-right mt-5">
                <div class="title-area">
                  <span>{subHeadingTwo}</span>
                  <h2>{headinTwo}</h2>
                </div>
                <p class="para">{paraTwo}</p>
                <div class="proj-details-imgs">
                  <div class="row flex gap-4">
                    <div class="text-center">
                      <img src={`/${imgCover}`} class="img-fluid" alt="image" />
                    </div>
                    <div class="text-center">
                      <img src={`/${imgCover}`} class="img-fluid" alt="image" />
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
