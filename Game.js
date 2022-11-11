
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
        // this.players = [player1, player2];
        this.whosTurn = player1
        // this.firstTurn = "player1"//why are these strings?
        this.turnCount = 0 //the game can only go to 8
        this.gameIsOver = false;
        this.isDraw = false;
    }

    checkPlayerTurn(){
        // for(var i = 0; i < this.players.length; i++)
        //     if(this.tradeTurns === 'player1')
        //         this.board[id] = this.players[i].token
            this.turnCount += 1
            this.checkForWin();
            this.tradeTurns();
            this.gameOver();
    }

    tradeTurns(){
        // this.whosTurn = this.whosTurn === this.playerOne ? this.playerTwo : this.playerOne
        
        if(this.whosTurn === this.playerOne) {
            this.whosTurn = this.playerTwo
            return this.whosTurn
        } else {
            this.whosTurn = this.playerOne
            return this.whosTurn
        }
    }
    // if (savedPosters[i].id === Number(event.target.parentNode.id))
    placeToken(id){ 
            if (!this.board[id]){
                this.board[id] = this.whosTurn.token 
            }
    }

    // Checking for the win conditions

    checkHorizontalWin(){
        // console.log(this.board)
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

    checkDiagnolWin() {
        if(this.board.one === this.board.five && this.board.five === this.board.nine && this.board.one !== "" ){
            console.log('diagnol 1', this.board.one)
            return this.board.one
        } else if(this.board.three === this.board.five && this.board.five === this.board.seven && this.board.three !== ""){
            console.log('diagnol 2', this.board.three)
            return this.board.three
        } else {
            return ""
        }
    }

    checkForVictory(){
        var winningToken; 
        // // console.log("horizontal win", winningToken)
        // if(!winningToken){ //or winningToken === "" . NEEDS A RE WRITE TO CHECK ALL THREE EVERYTIME
        //     winningToken = this.checkVerticalWin();
        //     // console.log("vertical win", winningToken)
        // } else if(!winningToken){
        //     winningToken = this.checkDiagnolWin();
        //     // console.log('Diagnol Win: ', winningToken)
        // } else {
        //     //this.checkDraw
        // }
    // console.log(this.checkDiagnolWin)

        var horizontalToken = this.checkHorizontalWin();
        var verticalToken = this.checkVerticalWin();
        var diagnolToken = this.checkDiagnolWin(); //
        console.log({horizontalToken, verticalToken, diagnolToken})
        if(winningToken === this.whosTurn.token){
            this.whosTurn.wins += 1
            this.gameIsOver = true
            console.log('Player 1 Wins', this.playerOne.wins)
            console.log('player 2 Wins', this.playerTwo.wins)
            //return an interpolated string with `${this.players[i].token} ${this.players[i].name} is winner!`
            // console.log('Winner!', winningToken)
        } 
            // console.log('Player 2 Wins', this.playerTwo.wins)

    }

    gameOver() {
        if(this.turnCount > 8) {
            this.gameIsOver = true;
            this.isDraw = true;
        }
    }

    checkDraw() {
        if (this.turnCount === 9){
            this.gameIsOver = true
            this.isDraw = true
        return "It's a draw"
        }
    }

    resetBoard(){
        console.log('resetBoard')
    }
}