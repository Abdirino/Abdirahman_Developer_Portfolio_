import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";

const Portfolio = () => {
  const sentence4 = "Projects".split("");
  return (
    <>
      <Navbar />
      <Background home="Home" section="Portfolio"/>
      <div className="portfolio">
        <h1>{sentence4.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })}<span>.</span></h1>
        <p>Selected Past Projects I've Undertaken</p>
        <div className="projects">
          <div className="project"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
