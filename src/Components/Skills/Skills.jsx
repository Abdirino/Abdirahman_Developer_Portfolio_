import React from "react";
import "./skills.css";

import tailwind from "../../Assets/Images/icons8-tailwind-css-48.png";
import redux from "../../Assets/Images/icons8-redux-48.png";
import framer from "../../Assets/Images/framer.png.png";
import next from "../../Assets/Images/nextjs.1024x1024.png";
import figma from "../../Assets/Images/icons8-figma-48.png";
import firebase from "../../Assets/Images/icons8-firebase-48.png";
import typeScript from "../../Assets/Images/icons8-typescript-48.png";
import jest from "../../Assets/Images/icons8-jest-can-collect-code-coverage-information-from-entire-projects-32.png";
import express from "../../Assets/Images/icons8-express-js-50.png";
import mongo from "../../Assets/Images/icons8-mongo-db-64.png";
import git from "../../Assets/Images/icons8-git-48.png";
import github from "../../Assets/Images/icons8-github-48.png";

const Skills = () => {
  return (
    <>
      <div className="Skills">
        <div className="skills">
          <div className="skill-detail">
            <h2>|| My Skills</h2>
            <h1 className="text">Elevating Front-End</h1>
            <h1 className="text">Development Skills.</h1>
            <p>
              Unlocking the potential of the digital realm through mastery of
              Front-End Development.
            </p>
            <button className="button">
              <span>Hire Me</span>
              <i class="fa-solid fa-computer"></i>
            </button>
          </div>
          <div className="skill-content">
            <div className="s-content">
              <i class="fa-brands fa-html5" style={{ color: "#f06305" }}></i>
              <i class="fa-brands fa-css3-alt" style={{ color: "#094fc8" }}></i>
              <img src={tailwind} alt="" />
              <i
                class="fa-brands fa-square-js"
                style={{ color: "#e4c811" }}
              ></i>
              <img src={typeScript} alt="" />
              <img src={jest} alt="" />
              <img src={figma} alt="" />
              <i class="fa-brands fa-react" style={{ color: "#00e1ff" }}></i>
              <img src={redux} alt="" />
              <img src={framer} alt="" />
              <img src={next} alt="" />
              <img src={firebase} alt="" />
              <i class="fa-brands fa-node" style={{ color: "#098b30" }}></i>
              <img src={express} alt="" />
              <img src={mongo} alt="" />
              <img src={git} alt="" />
              <img src={github} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
