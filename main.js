
var outcomePlayer1 = document.querySelector('.left-outcome');
var outcomePlayer2 = document.querySelector('.right-outcome');
var turnTitle = document.querySelector('.middle-header')
var allSquares = document.querySelectorAll('.square')
// var square1 = document.querySelector('.sq1')
// var square2 = document.querySelector('.sq2')
// var square3 = document.querySelector('.sq3')
// var square4 = document.querySelector('.sq4')
// var square5 = document.querySelector('.sq5')
// var square6 = document.querySelector('.sq6')
// var square7 = document.querySelector('.sq7')
// var square8 = document.querySelector('.sq8')
// var square9 = document.querySelector('.sq9')

var gameLayout = document.querySelector('#game-grid')


var playerOne = new Player("Brass", '🎺')
var playerTwo = new Player("Strings", '🎻')
var ticTacToe = new Game(playerOne, playerTwo)



gameLayout.addEventListener('click', startGame);

function startGame(event){
var square = event.target
var id = square.id 

ticTacToe.placeToken(id)
ticTacToe.checkForVictory()
ticTacToe.tradeTurns()
console.log('after', ticTacToe.board)
}

// updateGameboard() {
// }