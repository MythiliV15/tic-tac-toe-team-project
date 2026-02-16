import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <span>Player X: {score.X}</span>
      <span>Player O: {score.O}</span>
    </div>
  );
};

export default ScoreBoard;