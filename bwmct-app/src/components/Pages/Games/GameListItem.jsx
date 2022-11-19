import React, { useEffect, useRef } from "react";
import Card from "../../UI/Card";
import "./CSS/gameListItem.css";

const GameListItem = (props) => {
    const firstTeam = useRef("First Team");
    const secondTeam = useRef("Second Team");
    useEffect(() => {
        props.team.map((team) => {
            if (team.id === props.match.firstTeam) {
                firstTeam.current = team.name;
            }
            if (team.id === props.match.secondTeam) {
                secondTeam.current = team.name;
            }
            return 0;
        });
    });

    return (
        <Card>
            <div className="game-list-item">
                <span className="first-team">Team: {firstTeam.current}</span>
                <span className="versus">V/S</span>
                <span className="second-team">Team: {secondTeam.current}</span>
            </div>
        </Card>
    );
};

export default GameListItem;
