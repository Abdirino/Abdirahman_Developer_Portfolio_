import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";

import myImage from "../../Assets/Images/abdirino-pro.jpg";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Background />
      <div className="Contacts">
        <div className="contact">
          <div className="form">
            <h1>Get In Touch</h1>
            <p>
              Your perspective matters 💌, and I'm truly interested in what you
              have to say.
            </p>
            <form action="">
              <div className="row">
                <input type="text" className="margin" required placeholder="Name *" />
                <input type="email" required placeholder="E-Mail *" />
              </div>
              <input type="text" required placeholder="Subject *" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                required
                placeholder="Your Message *"
              ></textarea>
              <button className="button">
                <span>SEND MESSAGE</span>
                <i class="fa-solid fa-envelope-circle-check"></i>
              </button>
            </form>
          </div>
          <div className="contact-details">
            <div className="myImage">
              <img src={myImage} alt="" />
            </div>
            <div className="mail">
              <i class="fa-solid fa-envelope"></i>
              <div className="det">
                <h2>E-Mail</h2>
                <p>abdirinoahash@gmail.com</p>
              </div>
            </div>
            <div className="phone">
              <i class="fa-solid fa-phone"></i>
              <div className="det">
                <h2>Phone</h2>
                <p>+254 708 299034</p>
              </div>
            </div>
            <div className="location">
              <i class="fa-solid fa-location-crosshairs"></i>
              <div className="det">
                <h2>Locale</h2>
                <p>Ladhies Road, Nairobi, 00300, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
