import React from "react";
import "./background.css";
import { Link } from "react-router-dom";

const Background = ({ home,divide,section }) => {
  return (
    <>
      <div className="background">
        <Link to="/" style={{ color: "white" }}>
          <h2 className="bg-home">{home}</h2>
        </Link>
        <h2 className="divide">||</h2>
        <h2>{section}</h2>
      </div>
    </>
  );
};

export default Background;
