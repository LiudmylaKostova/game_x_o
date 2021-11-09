import React, { useCallback, useReducer } from "react";
import styles from "./GameLogic.module.css";
import Board from "../board/Board";
import { chooseWinner } from "../../chooseWinner";
import { showDraw } from "../../chooseWinner";

const initialState = {
  winner: undefined,
  draw: undefined,
  step: 0,
  board: Array(9).fill(""),
};

function reducer(state, action) {
  switch (action.type) {
    case "handleClick":
      const boardArray = [...state.board];

      boardArray[action.index] = state.step % 2 === 0 ? "x" : "0";
      // console.log(boardArray[action.index]);

      return {
        step: state.step + 1,
        board: boardArray,
        winner: chooseWinner(boardArray),
        draw: showDraw(boardArray),
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

const GameLogicUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = useCallback(
    (i) => {
      dispatch({ type: "handleClick", index: i });
    },
    [dispatch]
  );

  const resetGame = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return (
    <>
      {state.winner || state.draw ? (
        <div className={styles.box}>
          <p className={styles.descr}>
            Winner is {state.winner} {state.draw} <br /> Let's play
            <span className={styles.text}>NAUGHTS and CROSSES</span> again!
          </p>
          <button className={styles.btn} onClick={() => resetGame()}>
            Click me
          </button>
        </div>
      ) : null}
      <Board cells={state.board} click={handleClick} winner={state.winner} />
    </>
  );
};

export default GameLogicUseReducer;
