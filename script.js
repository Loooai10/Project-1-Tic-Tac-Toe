const boardCells = document.querySelectorAll(".cell");
const turn = document.querySelector(".turn");
const result = document.querySelector(".gameresult");
// assigning player symbols
const playerOne = "X";
const playerTwo = "O";
xCount = 0;
oCount = 0;
//h
// board array
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
// start game
startGame();
function startGame() {
  console.log('start game')
  boardCells.forEach((cell, index) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleClick.bind(null, cell, index));
  });
}
// handle click event
function handleClick(cell, index) {
  console.log(cell.innerHTML)
  const cellValue = cell.innerHTML;
  console.log(cellValue);
  if (cellValue === "") {
    if (turn.innerHTML === "Player 1") {
      cell.innerHTML = playerOne;
      turn.innerHTML = "Player 2";
      // insert into array
      board[Math.floor(index / 3)][index % 3] = playerOne;
    } else {
      console.log("playerTwo", playerTwo);
      cell.innerHTML = playerTwo;
      turn.innerHTML = "Player 1";
      // insert into array
      board[Math.floor(index / 3)][index % 3] = playerTwo;
    }
  }
  // remove event listener
  cell.removeEventListener('click', handleClick);
  // check if someone won
  checkWinner();
}
// check if player won
function checkWinner() {
  // check for rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] !== ""
    ) {
      showResult(board[i][0]);
      return;
    }
  }

  // check for columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] !== ""
    ) {
      showResult(board[0][i]);
      return;
    }
  }
  // check for diagonals
  if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] !== ""
  ) {
    showResult(board[0][0]);
    return;
  }
  if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] !== ""
  ) {
    showResult(board[0][2]);
    return;
  }
  // check for a tie
  // if all cells are filled and no winner
  var count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] != "") {
        count++;
      }
    }
  }
  if (count == 9) {
    showResult("Tie");
    return;
  }
}
// show result
function showResult(symbol) {
  console.log("showResult");
  if (symbol === playerOne) {
    result.innerHTML = "Player 1 Win!";
    xCount = xCount + 1;
    DisableNextButton()
    console.log(xCount);
  } else if (symbol === playerTwo) {
    result.innerHTML = "Player 2 Win!";
    DisableNextButton()
    oCount = oCount + 1;
    console.log(oCount);
  }
  // Disable button
  else {
    result.innerHTML = "Draw!";
  }
  result.style.display = "flex";
}
function DisableNextButton(boardCellsId) {
  document.getElementById(boardCellsId);
  // if somebody wins, removeEvent listener from cells


}

function drp() {
  document.querySelector("select").value == "0";
}
// reset game
function restartGame() {
  result.style.display = "none";
  turn.innerHTML = "Player 1";
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  startGame();
}
