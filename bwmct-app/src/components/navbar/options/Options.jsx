import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ThreeDash from "./threeDash.png";
import "./options.css";

const Options = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerHeight <= 500 && isMobile === false) setIsMobile(true);
      if (window.innerHeight > 500 && isMobile === true) setIsMobile(false);
    });
  });

  if (isMobile) {
    return (
      <div className="nav-right">
        <img className="nav-three-dash" src={ThreeDash} alt="Error" />
      </div>
    );
  } else {
    return (
      <div className="nav-right">
        <ul className="nav-list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/games">GAMES</Link>
          </li>
          <li>Credits</li>
        </ul>
      </div>
    );
  }
};

export default Options;
