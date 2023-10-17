import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";

import myImage from "../../Assets/Images/abdirino-pro.jpg";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  // const {name, ref, onChange, onBlur} = register("name")

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <>
      <Navbar />
      <Background home="Home" section="Contacts" />
      <div className="Contacts">
        <div className="contact">
          <div className="form">
            <h1>Get In Touch</h1>
            <p>
              Your perspective matters 💌, and I'm truly interested in what you
              have to say.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="row">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="margin"
                  required
                  placeholder="Name *"
                />

                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  required
                  placeholder="E-Mail *"
                />
              </div>
              <label htmlFor="subject"></label>
              <input
                type="text"
                id="subject"
                {...register("subject")}
                required
                placeholder="Subject *"
              />

              <label htmlFor="message"></label>
              <textarea
                {...register("message")}
                id="message"
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
            <DevTool control={control} />
          </div>
          <div className="contact-details">
            <div className="myImage">
              <img src={myImage} alt="" />
            </div>
            <div className="mail">
              <i class="fa-solid fa-envelope"></i>
              <div className="det">
                <h2>E-Mail</h2>
                <p>abdirahman2887@gmail.com</p>
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
