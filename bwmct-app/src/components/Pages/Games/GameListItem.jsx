import React, { useEffect, useRef } from "react";
import Card from "../../UI/Card";
import "./CSS/gameListItem.css";

const GameListItem = (props) => {
  const firstTeam = useRef("First Team");
  const secondTeam = useRef("Second Team");

  let matchState = "";
  let matchDate = <div>{props.match.matchDate}</div>;

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

  if (props.match.matchState === "0") {
    matchState = (
      <div className="ongoing">
        <div className="target">{props.match.target}</div>
        <div className="score">{props.match.liveScore}</div>
      </div>
    );
  } else if (props.match.matchState === "1") {
    matchState = props.match.description;
  }

  return (
    <Card>
      <div className="gamelist-card">
        <div className="match-date"> {matchDate} </div>
        <div className="game-list-item">
          <div className="first-team">Team {firstTeam.current}</div>
          <div className="versus">V/S</div>
          <div className="second-team">Team {secondTeam.current}</div>
        </div>
        <div className="match-state">{matchState}</div>
      </div>
    </Card>
  );
};

export default GameListItem;
