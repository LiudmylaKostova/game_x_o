import styles from "./Board.module.css";
import Cell from "../cell/Cell.js";

const Board = ({ cells, click }) => {
  // console.log(cells);
  return (
    <div className={styles.wrapper}>
      {cells.map((cell, index) => {
        return (
          <Cell
            key={index}
            value={cell}
            onClick={() => click(index)}
            disable={cell ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Board;
