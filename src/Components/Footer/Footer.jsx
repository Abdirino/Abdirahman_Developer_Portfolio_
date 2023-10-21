import React from "react";
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";

import FooterIMG from "../../Assets/Images/A-Footer.png";

const Footer = () => {
  return (
    <>
      <ScrollToTop
        smooth
        top="21"
        style={{ background: "#b7fb41c4", fontWeight: "bolder" }}
      />
      <div className="line"></div>
      <div className="copy-write">
        <img src={FooterIMG} alt="Logo" />

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
        <p>
          © 2023 <span> Abdirahman A. </span> Dev Portfolio Made with ❤️.
        </p>
      </div>
    </>
  );
};

export default Footer;
