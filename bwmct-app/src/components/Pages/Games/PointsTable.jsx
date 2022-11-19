import React, { useState, useEffect } from "react";

import PointsTableRow from "./PointsTableRow";

const PointsTable = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [team, setTeam] = useState([]);

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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        //If is loading
        return <div>Loading...</div>;
    } else {
        //If everyhing is successful
        const pointsTable = (
            <table>
                <tr>
                    <th>Team</th>
                    <th>Match Played</th>
                    <th>Win</th>
                    <th>Loss</th>
                    <th>Draw</th>
                    <th>Net Run Rate</th>
                    <th>Total Point</th>
                </tr>
                {team.map((item) => {
                    //Maps data to "pointsTableRow"
                    return <PointsTableRow key={item.id} match={item} />;
                })}
            </table>
        );

        // Renders
        return <>{pointsTable}</>;
    }
};

export default PointsTable;
