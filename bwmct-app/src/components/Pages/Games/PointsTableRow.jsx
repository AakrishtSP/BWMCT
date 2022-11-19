import React from "react";

const PointsTableRow = (props) => {
    return (
        <tr>
            <td>{props.match.name}</td>
            <td>{props.match.gamesPlayed}</td>
            <td>{props.match.win}</td>
            <td>{props.match.loss}</td>
            <td>{props.match.draw}</td>
            <td>{props.match.netRun}</td>
            <td>Total</td>
        </tr>
    );
};
export default PointsTableRow;
