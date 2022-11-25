import React from "react";
import { Link } from "react-router-dom";

import "./options.css";

const Options = () => {
  return (
    <div className="nav-right">
      <ul className="nav-list">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/games">GAMES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Options;
