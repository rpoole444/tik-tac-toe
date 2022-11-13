// ---------------------------------querySelectors---------------------------------
var outcomePlayer1 = document.querySelector('.left-outcome');
var outcomePlayer2 = document.querySelector('.right-outcome');
var turnTitle = document.querySelector('.middle-header');
var allSquares = document.querySelectorAll('button');
var square1 = document.querySelector('#one');
var square2 = document.querySelector('#two');
var square3 = document.querySelector('#three');
var square4 = document.querySelector('#four');
var square5 = document.querySelector('#five');
var square6 = document.querySelector('#six');
var square7 = document.querySelector('#seven');
var square8 = document.querySelector('#eight');
var square9 = document.querySelector('#nine');

var gameLayout = document.querySelector('#game-grid');


var playerOne = new Player("Brass", '🎺');
var playerTwo = new Player("Strings", '🎻');
var ticTacToe = new Game(playerOne, playerTwo);

// ----------------------------------EventListeners---------------------------------

gameLayout.addEventListener('load', showCurrentPlayer())
gameLayout.addEventListener('click', playGame);

//-----------------------------------Functions------------------------------------

function playGame(event){
    var square = event.target;
    var id = square.id ;
        ticTacToe.placeToken(id);
        ticTacToe.checkForVictory();
        ticTacToe.checkDraw();
        showTitleStatus();
        showPlayersMove(event);
        disableIcon(event)
        ticTacToe.checkPlayerTurn();// something is messing up my turn icon here!
        updatePlayerWins(playerOne, playerTwo);
        // ticTacToe.setGameLimit()
        newBoard()
        
        console.log('after', ticTacToe.board);
}

function newBoard(){
    ticTacToe.resetBoard();
    clearField();
    enableIcon()
}

function updatePlayerWins(playerOne, playerTwo) {
        outcomePlayer1.innerText = `${playerOne.wins} wins`;
        outcomePlayer2.innerText = `${playerTwo.wins} wins`;
}

function showTitleStatus() {
    // if(ticTacToe.gameIsOver && ticTacToe.turnCount === 0 && !ticTacToe.isDraw){
    //     turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`;
   if(!ticTacToe.gameIsOver && !ticTacToe.isDraw){
        turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`;
    } else if(ticTacToe.gameIsOver && ticTacToe.isDraw) {
        turnTitle.innerText = "It's a Draw!!";
        // console.log('title change to DRAW', ticTacToe)
    } else if(ticTacToe.gameIsOver && !ticTacToe.isDraw){
        turnTitle.innerText = `${ticTacToe.whosTurn.token} is the Winner!!`;
        // console.log('title change to WIN', ticTacToe)
    }
}

function showCurrentPlayer() {
    turnTitle.innerText = `It's ${ticTacToe.whosTurn.token} turn!`;
}

function showPlayersMove(event) {
    var square = event.target;
    square.innerText = ticTacToe.whosTurn.token;
}

function clearField() {
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
    ticTacToe.gameIsOver = false;
    ticTacToe.isDraw = false;
}

function delayedReset() {
    setTimeout(clearField, 2000)
}

function disableIcon(event) {
    var square = event.target;
    if(square.innerText === ticTacToe.whosTurn.token){
        square.disabled = true
    }
}

function enableIcon() {
    if(!ticTacToe.gameIsOver && ticTacToe.turnCount === 0){
        square1.disabled = false;
        square2.disabled = false;
        square3.disabled = false;
        square4.disabled = false
        square5.disabled = false
        square6.disabled = false
        square7.disabled = false
        square8.disabled = false
        square9.disabled = false
    }
}