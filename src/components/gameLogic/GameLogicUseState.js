import React, { useState } from "react";
import styles from "./GameLogic.module.css";
import Board from "../board/Board";
import { chooseWinner } from "../../chooseWinner";
import { showDraw } from "../../chooseWinner";

const GameLogicUseState = () => {
  const [step, setStep] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(""));

  const winner = chooseWinner(board);
  const draw = showDraw(board);

  const handleClick = (index) => {
    const boardArray = [...board];
    boardArray[index] = step % 2 === 0 ? "x" : "0";
    // console.log(boardArray);
    // console.log(step);
    // console.log(step % 2 === 0);
    // console.log(boardArray[index]);
    setBoard(boardArray);
    setStep(step + 1);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setStep(0);
  };

  return (
    <>
      {winner || draw ? (
        <div className={styles.box}>
          <p className={styles.descr}>
            Winner is {winner} {draw} <br /> Let's play
            <span className={styles.text}>NAUGHTS and CROSSES</span> again!
          </p>
          <button className={styles.btn} onClick={() => resetGame()}>
            Click me
          </button>
        </div>
      ) : (
        ""
      )}
      <Board cells={board} click={handleClick} winner={winner} />
    </>
  );
};

export default GameLogicUseState;
