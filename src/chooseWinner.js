const chooseWinner = (cells) => {
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

  let isDraw = true;

  for (let i = 0; i < lines.length; i++) {
    // console.log(cells);

    let winnerIsX =
      cells[lines[i][0]] === "x" &&
      cells[lines[i][1]] === "x" &&
      cells[lines[i][2]] === "x";

    let winnerIs0 =
      cells[lines[i][0]] === "0" &&
      cells[lines[i][1]] === "0" &&
      cells[lines[i][2]] === "0";

    let notGameOver =
      !cells[lines[i][0]] || !cells[lines[i][1]] || !cells[lines[i][2]];

    if (winnerIsX) {
      console.log("X is winner");
      return "X";
    } else if (winnerIs0) {
      console.log("0 is winner");
      return "0";
    } else if (notGameOver) {
      isDraw = false;
    }
  }

  if (isDraw) {
    console.log("Draw!!!");
    return "D";
  }
};

export default chooseWinner;
