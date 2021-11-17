export const chooseWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const winnerIsX =
      cells[lines[i][0]] === "x" &&
      cells[lines[i][1]] === "x" &&
      cells[lines[i][2]] === "x";

    const winnerIs0 =
      cells[lines[i][0]] === "0" &&
      cells[lines[i][1]] === "0" &&
      cells[lines[i][2]] === "0";

    if (winnerIsX) {
      console.log("X is winner");
      return "X";
    } else if (winnerIs0) {
      console.log("0 is winner");
      return "0";
    }
  }
};

export const showDraw = (cells) => {
  // console.log(cells);
  if (cells.indexOf("") === -1) {
    console.log("draw!!!");
    return "D";
  } else {
    console.log("keep playing :)");
    return undefined;
  }
};
