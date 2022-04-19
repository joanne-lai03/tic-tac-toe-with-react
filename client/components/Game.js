import React, { useState } from "react";
import { calculateWinner } from "../Helpers";
import Board from "./Board";

export default function Game () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  function handleClick () {
    const boardCopy = [...board]
  }

  return ( 
    <Board squares={board} onClick={handleClick} />
  )
}