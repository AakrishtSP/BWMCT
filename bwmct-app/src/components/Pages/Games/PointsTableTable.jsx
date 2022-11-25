import React from "react";
import PointsTableRow from "./PointsTableRow";
import Card from "../../UI/Card";
import "./CSS/pointsTableTable.css";

const PointsTableTable = (props) => {
  return (
    <Card>
      <table className="points-table">
        <thead className="points-table-header">
          <tr>
            <th>Team</th>
            <th>Match Played</th>
            <th>Win</th>
            <th>Loss</th>
            <th>Draw</th>
            <th>Total Point</th>
            <th>Net Run Rate</th>
          </tr>
        </thead>
        {props.teams.map((item) => {
          //Maps data to "pointsTableRow"
          return <PointsTableRow key={item.id} match={item} />;
        })}
      </table>
    </Card>
  );
};

export default PointsTableTable;
