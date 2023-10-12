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
            <div className="name">
                <input type="text" />
            </div>
          </form>
        </div>
        <div className="contact-details"></div>
      </div>
    </>
  );
};

export default Contact;
