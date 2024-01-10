import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import { Partytown } from "@builder.io/partytown/react";
import Footer from "../../Components/Footer/Footer";

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
            <div className="project-image">
              <div className="card"></div>
            </div>

            <div className="project-description">
              <h2>Service Provider</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                sunt dolor magnam ipsam nostrum officiis perferendis harum
                eveniet similique.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                sunt dolor magnam ipsam nostrum officiis perferendis harum
                eveniet similique.
              </p>
              <button className="button">
                <a href="https://iaffordablenetsp.co.ke/" target="_blank" rel="noreferrer">
                  <span>VISIT</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
