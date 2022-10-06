const boardCells = document.querySelectorAll(".cell");
const turn = document.querySelector(".playerturn");
const result = document.querySelector(".gameresult");
const announcer = document.querySelector('.announcer');
const instruction = document.querySelector(".instruction")

// assigning player symbols
let playerOne = "X";
let playerTwo = "O";
let gameOver = false
xCount = 0;
oCount = 0;
let owins = 0;
let xwins = 0;

let xwinsText = document.querySelector('.x-wins')
let owinsText = document.querySelector('.o-wins')

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
 if (!gameOver){
   console.log(cell.innerHTML)
    const cellValue = cell.innerHTML;
    console.log(cellValue);
    if (cellValue === "") {
      if (turn.innerHTML === "Player 1") {
      cell.innerHTML = playerOne;
       cell.style="color:orange";
// Fill.style.color = "blue"
        turn.innerHTML = "Player 2";
        // insert into array
        board[Math.floor(index / 3)][index % 3] = playerOne;
      } else {
        console.log("player2", playerTwo);
        cell.innerHTML = playerTwo;
        cell.style="color:orangered"
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
}
// check if player won
function checkWinner() {
  // check for rows
  for (let i = 0; i < 3; i++) {
    console.log('checkwinner')
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] !== ""
    ) {
      showResult(board[i][0]);
      if (turn.innerHTML === "Player 2"){
        xwins++
        console.log(xwins)
        xwinsText.innerHTML = `player X${xwins}`

      }else{
        owins++
        console.log(owins)
        owinsText.innerHTML = `player O${owins}`
      }
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
      if (turn.innerHTML === "Player 2"){
        xwins++
        console.log(xwins)
        xwinsText.innerHTML = `${xwins}`

      }else{
        owins++
        console.log(owins)
        owinsText.innerHTML = `${owins}`
    } 
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
    if (turn.innerHTML === "Player 2"){
      xwins++
      console.log(xwins)
      xwinsText.innerHTML = `${xwins}`

    }else{
      owins++
      console.log(owins)
      owinsText.innerHTML = `${owins}`
  } 
  return;
}
  if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] !== ""
  ) {
    showResult(board[0][2]);
    if (turn.innerHTML === "Player 2"){
      xwins++
      console.log(xwins)
      xwinsText.innerHTML = `${xwins}`

    }else{
      owins++
      console.log(owins)
      owinsText.innerHTML = `${owins}`
 }
  return;
}
  // check for a Draw
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
    showResult("Draw");
    return;
  }}

// show result
function showResult(symbol) {
  console.log("showResult");
  if (symbol === playerOne) {
    gameOver = true
    result.innerHTML = "Player 1 Win!";
    xCount = xCount + 1;
    removeClickEvents()
    // DisableNextButton()
    console.log(xCount);
  } else if (symbol === playerTwo) {
    gameOver = true
    result.innerHTML = "Player 2 Win!";
    removeClickEvents()
    // DisableNextButton()
    oCount = oCount + 1;
    console.log(oCount);
  }
  // Disable button
  else {
    gameOver = true
    result.innerHTML = "Draw!";
    removeClickEvents()
  }
  result.style.display = "flex";
}

function removeClickEvents() {
  boardCells.forEach((cell, index) => {
    cell.removeEventListener("click", handleClick.bind(null, cell, index));
  });
}
// // function DisableNextButton(boardCellsId) {
// //   document.getElementById(boardCellsId);
//   // if somebody wins, removeEvent listener from cells
// }

function drp() {
  document.querySelector("select").value == "0";
}
// reset game
function restartGame() {
  gameOver = false
  result.style.display = "none";
  turn.innerHTML = "Player 1";
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  startGame();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
// function gameLost() {
//   alert("😢You lose!😢");
// }
// setTimeout(gameLost, 60000);
// i = 60;
// function onTimer() {
//   document.getElementById('mycounter').innerHTML = i;
//   i--;
//   if (i < 0) {
//     alert('😢You lose!😢');
//   }
//   else {
//     setTimeout(onTimer, 1000);
// //   }
// // }

// function countdown() {
//   var seconds = 60;
//   function tick() {
//       var counter = document.getElementById("counter");
//       seconds--;
//       counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//       if( seconds > 0 ) {
// //           setTimeout(tick, 1000);
//  } else {
// //  alert("Game over");
// // }
// //   }
//   tick();
// }

// // start the countdown
// countdown(tick)
