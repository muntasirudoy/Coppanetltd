import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";

const index = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default index;
