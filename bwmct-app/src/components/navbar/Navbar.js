import React from "react";
import Logo from "./logo/Logo";
import Options from "./options/Options";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Options />
        </div>
    );
};

export default Navbar;
