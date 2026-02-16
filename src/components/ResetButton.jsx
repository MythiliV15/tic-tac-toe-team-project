import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-btn" onClick={onReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;