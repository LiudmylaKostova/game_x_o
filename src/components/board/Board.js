import styles from "./board.module.css";
import Cell from "../cell/cell.js";

const Board = ({ cells, click, winner }) => {
  return (
    <div className={styles.wrapper}>
      {cells.map((cell, index) => {
        return (
          <Cell
            key={index}
            value={cell}
            onClick={() => click(index)}
            disable={cell || winner ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Board;
