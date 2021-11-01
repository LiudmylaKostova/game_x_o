import styles from "./Cell.module.css";

const Cell = ({ onClick, value, disable }) => {
  return (
    <button className={styles.cell} onClick={onClick} disabled={disable}>
      {value}
    </button>
  );
};

export default Cell;
