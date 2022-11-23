import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./CSS/games.css";

const Games = () => {
    return (
        <>
            <ul className="gamelist-nav-bar-list">
                <li>
                    <Link to="/games"><div>Matches</div></Link>
                </li>
                <li>
                    <Link to="pointsTable"><div>Points Table</div></Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
};

export default Games;
