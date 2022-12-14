import React from "react";

const PointsTableRow = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.match.name}</td>
        <td>{props.match.gamesPlayed}</td>
        <td>{props.match.win}</td>
        <td>{props.match.loss}</td>
        <td>{props.match.draw}</td>
        <td>{props.match.win * 2 + props.match.draw * 1}</td>
        <td>{props.match.netRun}</td>
      </tr>
    </tbody>
  );
};
export default PointsTableRow;
