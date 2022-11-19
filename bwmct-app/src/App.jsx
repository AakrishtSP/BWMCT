import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Games from "./components/Pages/Games/Games";
import GameList from "./components/Pages/Games/GameList";
import PointsTable from "./components/Pages/Games/PointsTable";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="games" element={<Games />}>
                    <Route path="pointsTable" element={<PointsTable />} />
                    <Route path="" element={<GameList />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
