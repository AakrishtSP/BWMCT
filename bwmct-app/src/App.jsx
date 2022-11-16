import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Games from "./components/Pages/Games/Games";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="games" element={<Games />}>
                    <Route path="scoreboard" element={<div>HEllo</div>} />
                    <Route path="" element={<div>Hi</div>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
