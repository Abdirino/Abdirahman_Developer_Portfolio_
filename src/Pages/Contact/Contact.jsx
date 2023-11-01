import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import Navbar from "../../Components/Navbar/Navbar";
import Background from "../../Components/Background/Background";

import myImage from "../../Assets/Images/abdirino-pro.jpg";
import Footer from "../../Components/Footer/Footer";
import { Partytown } from "@builder.io/partytown/react";

const Contact = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <Navbar />
      <Background home="Home" section="Contacts" />
      <div className="Contacts">
        <div className="contact">
          <div className="form">
            <h1>Get In Touch</h1>
            <p>
              Contact me for freelance or collaboration.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="row">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Your Name is Required",
                    },
                  })}
                  className="margin"
                  required
                  placeholder="Name *"
                />

                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9. !#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid Email Format",
                    },
                  })}
                  required
                  placeholder="E-Mail *"
                />
              </div>

              <label htmlFor="subject"></label>
              <input
                type="text"
                id="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Whats your subject?",
                  },
                })}
                required
                placeholder="Subject *"
              />

              <label htmlFor="message"></label>
              <textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "Input Your Message",
                  },
                })}
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
            {/* <DevTool control={control} /> */}
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
