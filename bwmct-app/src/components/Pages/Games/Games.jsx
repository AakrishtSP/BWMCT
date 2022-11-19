import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./CSS/games.css";

const Games = () => {
    return (
        <>
            <ul className="gamelist-nav-bar-list">
                <li>
                    <Link to="/games">Matches</Link>
                </li>
                <li>
                    <Link to="pointsTable">Points Table</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Games;
