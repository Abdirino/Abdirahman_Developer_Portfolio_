import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div class="loading-wave">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
