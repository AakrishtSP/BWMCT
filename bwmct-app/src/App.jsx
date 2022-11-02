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
                <Route path="/" exact element={<Home />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </div>
    );
}

export default App;
