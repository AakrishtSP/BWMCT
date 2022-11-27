import React, { useState, useEffect } from "react";

import PointsTableTable from "./PointsTableTable";
import Card from "../../UI/Card";
import Loading from "../../UI/Loading";

import "./CSS/pointsTable.css";

const PointsTable = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [team, setTeam] = useState([]);

  let poolA = [];
  let poolB = [];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/team/")
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    //If is loading
    return <Loading />;
  } else {
    console.log(team);
    //If everyhing is successful
    poolA = team.filter((pool) => pool.pool === 1);
    poolB = team.filter((pool) => pool.pool === 2);

    // Renders
    return (
      <>
        <Card className="points-table-card">
          <h1 className="points-table-pool">Pool A</h1>
          <PointsTableTable teams={poolA} />
        </Card>

        <Card>
          <h1 className="points-table-pool">Pool B</h1>
          <PointsTableTable teams={poolB} />
        </Card>
      </>
    );
  }
};

export default PointsTable;

/*
team.map((item) => {
          //Maps data to "pointsTableRow"
          return <PointsTableRow key={item.id} match={item} />;


*/
