import React, { useState } from "react";
import calculateWinner from "../Helper"
import Board from "./Board";

export default function Game () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  function handleClick (i) {
    const boardCopy = [...board]
    // if user clicks an occupied square or if game is won, return
    if(winner || boardCopy[i])
      return;
    // or put an X or O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  function renderMoves () {
    return <button onClick={() => setBoard(Array(9).fill(null))}>
      Play Again
    </button>
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="next-player">
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
      </div>
    </>
  )
}