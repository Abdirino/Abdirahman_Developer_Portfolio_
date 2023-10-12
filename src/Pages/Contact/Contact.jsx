import React from "react";
import "./contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Background />
      <div className="contact">
        <div className="form">
          <form action="">
            <h1>Get In Touch</h1>
            <p>I would Love to hear from you.</p>
          </form>
        </div>
        <div className="contact-details"></div>
      </div>
    </>
  );
};

export default Contact;
