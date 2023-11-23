import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Record from '../../Components/Record/Record'
import Footer from "../../Components/Footer/Footer";
import HService from "../../Components/ServicesHome/HomeService";
import { Link } from "react-router-dom";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import { Partytown } from "@builder.io/partytown/react";

const Home = () => {
  const sentence = "Abdirahman".split("");
  const sentence2 = "Hey".split("");
  const sentence3 = "A.".split("");
  const sentence4 = "I'm".split("");
  const sentence5 = "projects".split("");
  const sentence6 = "There".split("");

  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Navbar />
      <div className="Home">
        <div className="home">
          <div className="h-detail">
            <h1 className="h1">
              {sentence2.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })} {sentence6.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })}
              👋,
            </h1>
            <h1 className="h1">
              {sentence4.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })}{" "}
              {sentence.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })}{" "}
              {sentence3.map((letter, index) => {
                return <TextAnimation key={index}>{letter}</TextAnimation>;
              })}
            </h1>
            <p>
              Software Engineer, Full-Stack & UI/UX Designer,
            </p>
            <button className="button">
              <span>RESUME</span>
            </button>
          </div>
          <div className="h-links">
            <div className="proj-link">
              <h1>
                Take a tour of my{" "}
                <Link to="/portfolio">
                  <span>
                    {sentence5.map((letter, index) => {
                      return (
                        <TextAnimation key={index}>{letter}</TextAnimation>
                      );
                    })}
                  </span>
                </Link>
              </h1>
              <h2>
                Explore My Work and discover the creativity that fuels my
                designs, and the innovation that breathes life into my code.
              </h2>
            </div>

            <div className="h-social">
              <h1>Say Hello 🤝</h1>
              <h2>
                Let's Connect and forge a meaningful partnership in the digital
                realm.
              </h2>
              <div className="social">
                <a href="tel: +254 708 299034">
                  <i class="fa-solid fa-square-phone text"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/AbdirinoAhash"
                >
                  <i class="fa-brands fa-square-x-twitter text"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/abdirahman-abdulaziz/"
                >
                  <i class="fa-brands fa-linkedin text"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=61551517816377"
                >
                  <i class="fa-brands fa-square-facebook text"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Abdirino"
                >
                  <i class="fa-brands fa-square-github text"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HService />
      <Footer />
    </>
  );
};

export default Home;
