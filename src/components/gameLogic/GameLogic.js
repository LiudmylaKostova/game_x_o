import React, { useState } from "react";
import styles from "./GameLogic.module.css";

import Board from "../board/Board";
import chooseWinner from "../../chooseWinner";

const GameLogic = () => {
  const [path, setPath] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(""));

  console.log(board);

  const winner = chooseWinner(board);

  const handleClick = (index) => {
    const boardArray = [...board];

    console.log(boardArray);
    console.log(path);
    console.log(path % 2 === 0);

    path % 2 === 0 ? (boardArray[index] = "x") : (boardArray[index] = "0");

    console.log(boardArray[index]);

    setBoard(boardArray);
    setPath(path + 1);

    if (winner) {
      resetGame();
    }

    /* неудачные пробы вывести "ничья" корректно */

    // if (boardArray.indexOf("") === -1) {
    //   alert("Draw!!!");
    //   stopGame();
    // }
    // if (path === 8 && !winner) {
    //   alert("draw");
    // }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setPath(0);
  };

  return (
    <>
      {winner ? (
        <div className={styles.box}>
          <p className={styles.descr}>
            Winner is {winner} <br /> Let's play
            <span className={styles.text}>NAUGHTS and CROSSES</span> again!
          </p>
          <button className={styles.btn} onClick={() => resetGame()}>
            Click me
          </button>
        </div>
      ) : (
        ""
      )}
      <Board cells={board} click={handleClick} />
    </>
  );
};

export default GameLogic;
