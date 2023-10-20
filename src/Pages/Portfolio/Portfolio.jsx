import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Background home="Home" section="Portfolio"/>
      <div className="portfolio">
        <h1>Latest Projects</h1>
        <div className="projects">
          <div className="project"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
