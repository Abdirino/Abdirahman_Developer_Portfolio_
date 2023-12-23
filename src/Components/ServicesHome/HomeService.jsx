import React from "react";
import "./Hservice.css";
import Skills from "../Skills/Skills";
import TextAnimation from "../TextAnimation/TextAnimation";

const HService = () => {
  const sentence = "My".split("");
  const sentence2 = "Expertise".split("");
  return (
    <>
      <div className="h-Services">
        <h1>
          {sentence.map((letter, index) => {
            return <TextAnimation key={index}>{letter}</TextAnimation>;
          })}{" "}
          {sentence2.map((letter, index) => {
            return <TextAnimation key={index}>{letter}</TextAnimation>;
          })}
        </h1>
        <div className="h-services">
          <div className="h-service">
            <i class="fa-solid fa-database"></i>
            <h2>Software Development</h2>
            <ul>
              <li>Functional & OOP</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className="h-service">
            <i class="fa-solid fa-code"></i>
            <h2>Full-Stack Development</h2>
            <ul>
              <li>HTML, CSS & JavaScript</li>
              <li>Next.js</li>
              <li>Node.js & MongoDB</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="h-service">
            <i class="fa-solid fa-layer-group"></i>
            <h2>UI/UX Design</h2>
            <ul>
              <li>Wireframing</li>
              <li>Figma Design</li>
              <li>Responsive Design</li>
              <li>User Research</li>
              <li>Colors and Typography</li>
            </ul>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default HService;
