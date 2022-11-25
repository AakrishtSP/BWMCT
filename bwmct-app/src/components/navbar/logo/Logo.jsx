import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo = () => {
  return (
    <Link to="" className="link-no-decor">
      <div className="nav-logo-text">
        BWM<span className="nav-logo-text-fl">CT</span>
      </div>
    </Link>
  );
};

export default Logo;
