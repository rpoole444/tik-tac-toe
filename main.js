var outcomePlayer1 = document.querySelector(".left-outcome");
var outcomePlayer2 = document.querySelector(".right-outcome");
var turnTitle = document.querySelector(".middle-header");

var gameLayout = document.querySelector("#game-grid");
var square1 = document.querySelector("#one");
var square2 = document.querySelector("#two");
var square3 = document.querySelector("#three");
var square4 = document.querySelector("#four");
var square5 = document.querySelector("#five");
var square6 = document.querySelector("#six");
var square7 = document.querySelector("#seven");
var square8 = document.querySelector("#eight");
var square9 = document.querySelector("#nine");

var playerOne = new Player("Brass", "🎺");
var playerTwo = new Player("Strings", "🎻");
var ticTacToe = new Game(playerOne, playerTwo);

gameLayout.addEventListener("load", showCurrentPlayer());
gameLayout.addEventListener("click", playGame);

function playGame(event) {
  checkForGameOver();
  var square = event.target;
  var id = square.id; // new function w/conditional
  ticTacToe.placeToken(id);
  ticTacToe.checkForVictory();
  ticTacToe.checkDraw();
  disableGridOnWin();
  showPlayersMove(event);
  disableIcon(event);
  checkForTradeConditions();
  showTitleStatus();
  updatePlayerWins(playerOne, playerTwo);
  checkForBoardReset();
}

function showCurrentPlayer() {
  turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`;
}

function checkForGameOver() {
  if (ticTacToe.gameIsOver) {
    return;
  }
}

function showPlayersMove(event) {
  var square = event.target;
  square.innerText = ticTacToe.whosTurn.token;
}

function disableGridOnWin() {
  if (ticTacToe.gameIsOver) {
    square1.disabled = true;
    square2.disabled = true;
    square3.disabled = true;
    square4.disabled = true;
    square5.disabled = true;
    square6.disabled = true;
    square7.disabled = true;
    square8.disabled = true;
    square9.disabled = true;
  }
}

function disableIcon(event) {
  var square = event.target;
  if (square.innerText || ticTacToe.gameIsOver) {
    square.disabled = true;
  }
}

function checkForTradeConditions() {
  if (!ticTacToe.gameIsOver && !ticTacToe.isDraw) {
    ticTacToe.tradeTurns();
  }
}

function showTitleStatus() {
  if (!ticTacToe.gameIsOver && !ticTacToe.isDraw) {
    turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`;
  } else if (ticTacToe.gameIsOver && ticTacToe.isDraw) {
    turnTitle.innerText = "It's a Draw!!";
  } else if (ticTacToe.gameIsOver && !ticTacToe.isDraw) {
    turnTitle.innerText = `${ticTacToe.winningPlayer.token} is the Winner!!`;
  }
}

function updatePlayerWins(playerOne, playerTwo) {
  outcomePlayer1.innerText = `${playerOne.wins} wins`;
  outcomePlayer2.innerText = `${playerTwo.wins} wins`;
}

function checkForBoardReset() {
  if (ticTacToe.gameIsOver || ticTacToe.isDraw) {
    setTimeout(newBoard, 2000);
  }
}

function newBoard() {
  ticTacToe.resetBoard();
  clearField();
  enableIcon();
  showTitleStatus();
}

function clearField() {
  if (!ticTacToe.gameIsOver && ticTacToe.turnCount === 0) {
    square1.innerText = "";
    square2.innerText = "";
    square3.innerText = "";
    square4.innerText = "";
    square5.innerText = "";
    square6.innerText = "";
    square7.innerText = "";
    square8.innerText = "";
    square9.innerText = "";
  }
  ticTacToe.gameIsOver = false;
  ticTacToe.isDraw = false;
}

function enableIcon() {
  if (!ticTacToe.gameIsOver && ticTacToe.turnCount === 0) {
    square1.disabled = false;
    square2.disabled = false;
    square3.disabled = false;
    square4.disabled = false;
    square5.disabled = false;
    square6.disabled = false;
    square7.disabled = false;
    square8.disabled = false;
    square9.disabled = false;
  }
}
