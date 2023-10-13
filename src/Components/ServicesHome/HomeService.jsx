import React from "react";
import "./Hservice.css";
import Skills from "../Skills/Skills";

const HService = () => {
  return (
    <>
      <div className="h-Services">
        <h4>|| My Services 🧑‍💻</h4>
        <h1>Turning vision into web reality with expert Front-End finesse.</h1>
        <div className="h-services">
          <div className="h-service">
            <i class="fa-solid fa-layer-group"></i>
            <h2>UI/UX Design</h2>
            <ul>
              <li>Wireframing</li>
              <li>Web Accessibility</li>
              <li>Responsive Design</li>
              <li>User Research</li>
              <li>Colors and Typography</li>
            </ul>
          </div>
          <div className="h-service">
            <i class="fa-solid fa-code"></i>
            <h2>Development</h2>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="h-service">
            <i class="fa-brands fa-searchengin"></i>
            <h2>SEO Marketing</h2>
            <ul>
              <li>E-Commerce SEO</li>
              <li>Technical SEO</li>
              <li>Keyword Research</li>
              <li>International SEO</li>
              <li>SEO for social media</li>
            </ul>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default HService;
