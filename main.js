
var outcomePlayer1 = document.querySelector('.left-outcome');
var outcomePlayer2 = document.querySelector('.right-outcome');
var turnTitle = document.querySelector('.middle-header')
var allSquares = document.querySelectorAll('.square')
var square1 = document.querySelector('#one')
var square2 = document.querySelector('#two')
var square3 = document.querySelector('#three')
var square4 = document.querySelector('#four')
var square5 = document.querySelector('#five')
var square6 = document.querySelector('#six')
var square7 = document.querySelector('#seven')
var square8 = document.querySelector('#eight')
var square9 = document.querySelector('#nine')

var gameLayout = document.querySelector('#game-grid')


var playerOne = new Player("Brass", '🎺')
var playerTwo = new Player("Strings", '🎻')
var ticTacToe = new Game(playerOne, playerTwo)



gameLayout.addEventListener('click', startGame);

function startGame(event){
    var square = event.target
    var id = square.id 
        
        ticTacToe.placeToken(id);
        showPlayersMove(event);
        ticTacToe.checkDraw();
        ticTacToe.checkForVictory();
        ticTacToe.checkPlayerTurn();
        ticTacToe.gameOver();
        updatePlayerWins(playerOne, playerTwo);
        updatePlayerTurn();
        viewWinner();
        ticTacToe.resetBoard();
        clearField();
        

        console.log('after', ticTacToe.board)
}

function updatePlayerWins(playerOne, playerTwo) {
        outcomePlayer1.innerText = `${playerOne.wins} wins`;
        outcomePlayer2.innerText = `${playerTwo.wins} wins`;
}


function updatePlayerTurn() {
    turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`
    
}

function viewWinner() { // need to work on this one!
    console.log("game is over ", ticTacToe.gameIsOver)
    if(!ticTacToe.gameIsOver && ticTacToe.turnCount === 0 ){
        turnTitle.innerText = `${ticTacToe.whosTurn.token} is the Winner!!`
    }
}

function showPlayersMove(event) {
    var square = event.target
    // ticTacToe.placeToken(id)
    square.innerText = ticTacToe.whosTurn.token
}

function clearField() {
    console.log('clearField ')
    if(!ticTacToe.gameIsOver && ticTacToe.turnCount === 0){
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
    ticTacToe.gameisOver = false;
    ticTacToe.isDraw = false;
}

function disableIcon() {

}