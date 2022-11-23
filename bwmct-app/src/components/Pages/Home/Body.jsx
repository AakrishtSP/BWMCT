import React from "react";
import { Link } from "react-router-dom";
//import BodyLeft from "./BodyLeft";
//import BodyRight from "./BodyRight";
import "./CSS/body.css";

const Body = () => {
  return (
    <>
      <div classname="hero">
        <h1 className="homelogo">BWMCT</h1>
        <p className="hometext">
          Harder the battle, <span className="red"> Sweeter the victory</span>
        </p>
        <Link to="games" className="buttonhref">
          <button type="button" className="button">
            Explore
          </button>
        </Link>
      </div>
    </>
  );
};

export default Body;
