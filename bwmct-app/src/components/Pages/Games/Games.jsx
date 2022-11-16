import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameList from "./GameList";

import "./CSS/games.css";

const Games = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [player, setPlayer] = useState([]);
    const [team, setTeam] = useState([]);
    const [match, setMatch] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/match/")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMatch(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/api/team/")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTeam(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    useEffect(() => {
        fetch("http://localhost:8000/api/player/")
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPlayer(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const gameList = (
            <div>
                {match.map((item) => {
                    return (
                        <GameList
                            key={item.id}
                            match={item}
                            player={player}
                            team={team}
                        />
                    );
                })}
            </div>
        );

        return (
            <>
                <ul className="gamelist-nav-bar-list">
                    <li>
                        <Link to="/games">Matches</Link>
                    </li>
                    <li>
                        <Link to="scoreboard">Scoreboard</Link>
                    </li>
                </ul>
                {gameList}
            </>
        );
    }
};

export default Games;
