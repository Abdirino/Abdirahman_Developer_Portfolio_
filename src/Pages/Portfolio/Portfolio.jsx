import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import { Partytown } from "@builder.io/partytown/react";
import Footer from "../../Components/Footer/Footer";

import AIAP from "../../Assets/Images/IAffordable.png";
import flex from "../../Assets/Images/FlexiDrive.png";

const Portfolio = () => {
  const sentence0 = "Projects".split("");
  const sentence1 = "IAffordableNet_ISP".split("");
  const sentence2 = "FlexiDrive_Car-Rental".split("");
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Navbar />
      <Background home="Home" section="Portfolio" />
      <div className="portfolio">
        <h1>
          {sentence0.map((letter, index) => {
            return <TextAnimation key={index}>{letter}</TextAnimation>;
          })}
          <span>.</span>
        </h1>
        <p>Selected Past Projects I've Undertaken</p>
        <div className="projects">
          <div className="project">
            <div className="project-image">
              <img src={AIAP} alt="IAffordable" />
            </div>

            <div className="project-description">
              <h1>
                {sentence1.map((letter, index) => {
                  return <TextAnimation key={index}>{letter}</TextAnimation>;
                })}
                <span>.</span>
              </h1>
              <p>
                IAffordableNet ISP is your reliable and affordable internet
                service provider in Moyale, Kenya. Offering a wide range of
                high-speed internet plans to suit your needs and budget.
              </p>
              <p>
                Reliance on traditional marketing methods like flyers and
                word-of-mouth limited their reach and engagement with potential
                customers. Hence this website became a powerful marketing tool,
                leading to several positive outcomes for IAffordable ISP
              </p>
              <div className="role">
                <p>
                  <span>Role: </span>Web Design, Development & SEO.
                </p>
              </div>
              <div className="tech-used">
                <p>
                  <span>Technologies Used: </span>HTML5, CSS3, JavaScript, React
                  JS, Framer Motion
                </p>
              </div>
              <button className="button">
                <a
                  href="https://iaffordablenetsp.co.ke/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VIEW SITE</span>
                </a>
              </button>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={flex} alt="FlexiDrive" />
            </div>

            <div className="project-description">
              <h1>
                {sentence2.map((letter, index) => {
                  return <TextAnimation key={index}>{letter}</TextAnimation>;
                })}
                <span>.</span>
              </h1>
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
              <div className="role">
                <p>
                  <span>Role: </span>Web Design & Development.
                </p>
              </div>
              <div className="tech-used">
                <p>
                  <span>Technologies Used: </span>HTML5, CSS3, JavaScript, React
                  JS, Framer Motion
                </p>
              </div>
              <button className="button">
                <a
                  href="https://flexi-drive-car-rental.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VIEW SITE</span>
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
