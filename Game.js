
class Game {
    constructor(player1, player2){
        this.board = {
            one: "",
            two: "",
            three: "",
            four: "",
            five: "",
            six: "",
            seven: "",
            eight: "",
            nine: "",
        }
        this.playerOne = player1
        this.playerTwo = player2
        this.whosTurn = player1 
        this.turnCount = 0 
        this.gameIsOver = false;
        this.isDraw = false;
        this.gameCount = 0
    }

    checkPlayerTurn(){
        if(!this.placeToken){
            this.whosTurn = this.playerOne
            return this.playerOne
        } else {
            this.tradeTurns();
        }
    }

    tradeTurns(){
        // this.whosTurn = this.whosTurn === this.playerOne ? this.playerTwo : this.playerOne
        if(this.whosTurn === this.playerOne) {
            this.whosTurn = this.playerTwo
        } else {
            this.whosTurn = this.playerOne
        }
    }
   
    placeToken(id){ 
            if (!this.board[id]){
                this.board[id] = this.whosTurn.token 
            } 
            this.turnCount ++ 
            console.log('turnCount', this.turnCount)
    }

    // Checking for the win conditions------------------------------------------------

    checkHorizontalWin(){
        if(this.board.one === this.board.two && this.board.two === this.board.three && this.board.one !== ""){
            console.log('horizontal 1', this.board.one)
            return this.board.one
        } else if(this.board.four === this.board.five && this.board.five === this.board.six && this.board.four !== ""){
            console.log('horizontal 2', this.board.four)
            return this.board.four
        } else if(this.board.seven === this.board.eight && this.board.eight === this.board.nine && this.board.seven !== ""){
            console.log('horizontal 3', this.board.seven)
            return this.board.seven
        } else {
            return ""
        }
    }

    checkVerticalWin() {
        if(this.board.one === this.board.four && this.board.four === this.board.seven && this.board.one !== ""){
            console.log('vertical 1', this.board.one)
            return this.board.one
        } else if(this.board.two === this.board.five && this.board.five === this.board.eight && this.board.two !== ""){
            console.log('vertical 2', this.board.two)
            return this.board.two
        } else if(this.board.three === this.board.six && this.board.six === this.board.nine && this.board.three !== ""){
            console.log('vertical 3', this.board.three)
            return this.board.three
        } else {
            return ""
        }
    }

    checkDiagonalWin() {
        if(this.board.one === this.board.five && this.board.five === this.board.nine && this.board.one !== "" ){
            console.log('diagonal 1', this.board.one)
            return this.board.one
        } else if(this.board.three === this.board.five && this.board.five === this.board.seven && this.board.three !== ""){
            console.log('diagonal 2', this.board.three)
            return this.board.three
        } else {
            return ""
        }
    }

    checkForVictory(){
        var winningToken; 
        var horizontalToken = this.checkHorizontalWin();
        var verticalToken = this.checkVerticalWin();
        var diagonalToken = this.checkDiagonalWin(); 
        if(horizontalToken){
            winningToken = horizontalToken;
        } else if(verticalToken){
            winningToken = verticalToken
        } else if(diagonalToken){
            winningToken = diagonalToken
        }
        // console.log({horizontalToken, verticalToken, diagnolToken})
        if(winningToken === this.whosTurn.token){
            this.whosTurn.increaseWins()
            this.gameOver()
            console.log('Player 1 Wins', this.playerOne.wins)
            console.log('player 2 Wins', this.playerTwo.wins)
            console.log("gameIsOver-win State ", this.gameIsOver)
        } 
            // console.log('Player 2 Wins', this.playerTwo.wins)

    }

    
    checkDraw() {
        if (this.turnCount === 9){
            console.log("draw")
            this.gameOver()
            console.log("gameIsOver-draw State ", this.gameIsOver)
            return "It's a draw"
        };
    }

    gameOver() {
        if(this.turnCount > 8) {
            this.isDraw = true
            this.gameIsOver = true;
            this.turnCount = 0;
            this.gameCount++
            console.log('GameOver as a Draw', this.isDraw)
        } else {
            this.gameIsOver = true;
            this.turnCount = 0;
            this.gameCount++
            console.log('GameOver as a Win, Draw State:', this.isDraw)
        }
    }

    resetBoard(){
        if(this.gameIsOver === true || this.isDraw === true){
            this.board.one = "";
            this.board.two = "";
            this.board.three = "";
            this.board.four = "";
            this.board.five = "";
            this.board.six = "";
            this.board.seven = "";
            this.board.eight = "";
            this.board.nine = "";
            this.gameIsOver = false;
            this.isDraw = false;
        }    
    }
}

//     setGameLimit(){
//         if(this.whosTurn.wins === 5){
//             this.resetBoard()
    
//         }
//     }
// }