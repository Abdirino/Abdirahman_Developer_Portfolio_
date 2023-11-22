import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import { Partytown } from "@builder.io/partytown/react";

import FlexiDrive from "../../Assets/Images/FlexiDrive.png.png";

const Portfolio = () => {
  const sentence4 = "Projects".split("");
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Navbar />
      <Background home="Home" section="Portfolio" />
      <div className="portfolio">
        <h1>
          {sentence4.map((letter, index) => {
            return <TextAnimation key={index}>{letter}</TextAnimation>;
          })}
          <span>.</span>
        </h1>
        <p>Selected Past Projects I've Undertaken</p>
        <div className="projects">
          <div className="project">
            <div className="project-img">
              <img src={FlexiDrive} alt="" />
            </div>
            <div className="project-detail">
              <h2>FlexiDrive (Car Rental Solution)</h2>
              <p>Web Development</p>
              <button className="button">
                <span>View</span>
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={FlexiDrive} alt="" />
            </div>
            <div className="project-detail">
              <h2>FlexiDrive (Car Rental Solution)</h2>
              <p>Web Development</p>
              <button className="button">
                <span>View</span>
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={FlexiDrive} alt="" />
            </div>
            <div className="project-detail">
              <h2>FlexiDrive (Car Rental Solution)</h2>
              <p>Web Development</p>
              <button className="button">
                <span>View</span>
              </button>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={FlexiDrive} alt="" />
            </div>
            <div className="project-detail">
              <h2>FlexiDrive (Car Rental Solution)</h2>
              <p>Web Development</p>
              <button className="button">
                <span>View</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
