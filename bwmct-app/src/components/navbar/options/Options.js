import React from "react";
import ThreeDash from "./threeDash.png";
import "./options.css";

const Options = () => {
    let isMobile = window.innerWidth <= 500;
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
                    <li>HOME</li>
                    <li>GAMES</li>
                    <li>PROFILE</li>
                </ul>
            </div>
        );
    }
};

export default Options;
