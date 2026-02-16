import React, { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import { checkWinner } from "./logic/checkWinner";
import { initialBoard } from "./logic/gameState";
import "./styles/board.css";

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      setScore((prev) => ({
        ...prev,
        [result]: prev[result] + 1,
      }));
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard score={score} />
      <Board board={board} onClick={handleClick} />
      <p className="status">
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </p>
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;
