import React from "react";
import { Link } from "react-router-dom";
import ball from "./image/ball.png";
//import wallpaper from "./image/wallpaper.jpg";
//import BodyLeft from "./BodyLeft";
//import BodyRight from "./BodyRight";
import "./CSS/body.css";

const Body = () => {
  return (
    <>
      <div className="homepage">
        test
        <div className="homepage-texts">
          <h1 className="homelogo">BWMCT</h1>
          <p className="hometext">
            Harder the battle, <span className="red"> Sweeter the victory</span>
          </p>

          <div className="button">
            <Link to="games" className="buttonhref">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <div className="page1">
        <div className="pageleft">
          <h1 className="intro">WHAT'S BWMCT?</h1>
          <p className="intropara">
            BWMCT, referring to Brian Wood Memorial Cricket Tournament is a
            grand sporting activity in Gandaki Boarding School celebrated as an
            annual event since it's first inception. It is a common ground to
            demonstrate student's extraordinary skills in cricket and management
            skills.
            <br></br>
            <br></br>
            Six Teams Team 8+staff, Team 9, Team 10, Team 11, Team 12 and Team
            XI hustle and compete for the trophy and see who wins this
            championship.
            <br></br>
            <br></br>
            Get ready for the best..
          </p>
        </div>
        <div className="pageright">
          <img src={ball} alt="error" width="70%" className="ball"></img>
        </div>
      </div>
      <div className="end"> . </div>
    </>
  );
};

export default Body;
