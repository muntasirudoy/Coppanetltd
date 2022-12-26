import React from "react";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className="contain">
      <div class="loader">
            <div></div>
            <div></div>
            <div></div>
      </div>
      <p className=" text-2xl mt-4  text-[#f89973]"> Coppanet Ltd.</p>
    </div>
  );
};

export default Preloader;
