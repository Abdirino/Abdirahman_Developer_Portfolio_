import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";

import AboutIMG from "../../Assets/Images/About.png.jpg";
import Background from "../../Components/Background/Background";
// import Record from '../../Components/Record/Record'
import Footer from "../../Components/Footer/Footer";
import Skills from "../../Components/Skills/Skills";

const About = () => {
  return (
    <>
      <Navbar />
      <Background home="Home" section="About" />
      <div className="About">
        <div className="about">
          <div className="a-detail">
            <h3>|| About Me</h3>
            <h1 className="text">I'm a highly skilled Front-End</h1>
            <h1 className="text"> Developer with over 2 years</h1>
            <h1 className="text"> of professional experience.</h1>
            <p>
              My goal is to deliver exceptional experiences that meet both
              client needs and industry expectations, ensuring your projects are
              not only successful but also ahead of the curve.
            </p>
            <div className="about-links">
              <button className="button">
                <span>RESUME</span>
                <i class="fa-solid fa-file"></i>
              </button>
              <button className="button">
                <span>PORTFOLIO</span>
                <i class="fa-solid fa-diagram-project"></i>
              </button>
            </div>
          </div>

          <div className="a-image">
            <img src={AboutIMG} alt="" />
          </div>
        </div>
        <div className="line"></div>
        <div className="exp">
          <div className="experience">
            <h1>EXPERIENCE</h1>
            <div className="ex-detail">
              <p>|| 2022 - 2023</p>
              <h2>Junior Front-End Developer</h2>
              <h3>IAffordable LTD.</h3>
            </div>
            <div className="ex-detail">
              <p>|| 2023 - Present</p>
              <h2>Freelance Front-End Developer</h2>
              <h3>Upwork Inc.</h3>
            </div>
          </div>

          <div className="education">
            <h1>EDUCATION</h1>
            <div className="ex-detail">
              <p>|| 2022 - 2023</p>
              <h2>Certificate In Website and Software Development</h2>
              <h3>Inceptor Institute Of Technology</h3>
            </div>
            <div className="ex-detail">
              <p>|| 2023 - Present</p>
              <h2>Diploma In Software Engineering</h2>
              <h3>Zetech University</h3>
            </div>
          </div>
        </div>
        <div className="line"></div>
        {/* <Record /> */}
      </div>
      <Skills />
      <Footer />
    </>
  );
};

export default About;
