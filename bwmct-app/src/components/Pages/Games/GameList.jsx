import React, { useState, useEffect } from "react";
import GameListItem from "./GameListItem";
import Loading from "../../UI/Loading";

const GameList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);
  const [match, setMatch] = useState([]);

  //Fetching API data for match list
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

  //Fetches API data for Team
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

  //Fetch API data for player
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

  //If error in fetching data
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    //If is loading
    return <Loading />;
  } else {
    //If everyhing is successful
    const gameList = (
      <div>
        {match.map((item) => {
          //Maps data to "gameList"
          return (
            <GameListItem
              key={item.id}
              match={item}
              player={player}
              team={team}
            />
          );
        })}
      </div>
    );

    // Renders
    return <>{gameList}</>;
  }
};

export default GameList;
