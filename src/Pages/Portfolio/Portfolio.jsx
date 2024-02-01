import React from "react";
import "./portfolio.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import { Partytown } from "@builder.io/partytown/react";
import Footer from "../../Components/Footer/Footer";

import AIAP from "../../Assets/Images/IAffordable.png";
import flex from "../../Assets/Images/FlexiDrive.png";
import Skills from "../../Components/Skills/Skills";

const Portfolio = () => {
  const sentence0 = "Projects".split("");
  const sentence1 = "IAffordableNet_ISP".split("");
  const sentence2 = "FlexiDrive_Car-Rental".split("");
  return (
    <>
      <Partytown debug={true} forward={["dataLayer.push"]} />
      <Navbar />
      <Background home="Home" section="Portfolio" />
      <div className="Portfolio">
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
                  service provider in Moyale, Kenya. Reliance on traditional
                  marketing methods like flyers and word-of-mouth limited their
                  reach and engagement with potential customers.
                </p>
                <p>
                  Hence this website became a powerful marketing tool, leading
                  to several positive outcomes for IAffordable ISP.
                </p>
                <div className="role">
                  <p>
                    <span>Role: </span>Web Design, Development & SEO.
                  </p>
                </div>
                <div className="tech-used">
                  <p>
                    <span>Technologies Used: </span>HTML5, CSS3, JavaScript,
                    React JS, Framer Motion
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
                  Flexidrive is a personal car rental website that offers a wide
                  variety of vehicles to choose from, at competitive rates.
                  Whether you need a car for a weekend getaway or an extended
                  vacation, Flexidrive has the perfect car for you.
                </p>
                <p>
                  Our friendly and knowledgeable customer support team is always
                  available to help you with any questions you may have.
                </p>
                <div className="role">
                  <p>
                    <span>Role: </span>Web Design & Development.
                  </p>
                </div>
                <div className="tech-used">
                  <p>
                    <span>Technologies Used: </span>HTML5, CSS3, JavaScript,
                    React JS, Framer Motion
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
                  Flexidrive is a personal car rental website that offers a wide
                  variety of vehicles to choose from, at competitive rates.
                  Whether you need a car for a weekend getaway or an extended
                  vacation, Flexidrive has the perfect car for you.
                </p>
                <p>
                  Our friendly and knowledgeable customer support team is always
                  available to help you with any questions you may have.
                </p>
                <div className="role">
                  <p>
                    <span>Role: </span>Web Design & Development.
                  </p>
                </div>
                <div className="tech-used">
                  <p>
                    <span>Technologies Used: </span>HTML5, CSS3, JavaScript,
                    React JS, Framer Motion
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
                  service provider in Moyale, Kenya. Reliance on traditional
                  marketing methods like flyers and word-of-mouth limited their
                  reach and engagement with potential customers.
                </p>
                <p>
                  Hence this website became a powerful marketing tool, leading
                  to several positive outcomes for IAffordable ISP.
                </p>
                <div className="role">
                  <p>
                    <span>Role: </span>Web Design, Development & SEO.
                  </p>
                </div>
                <div className="tech-used">
                  <p>
                    <span>Technologies Used: </span>HTML5, CSS3, JavaScript,
                    React JS, Framer Motion
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
          </div>
        </div>
      </div>
      <Skills />
      <Footer />
    </>
  );
};

export default Portfolio;
