
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
        // if(this.whosTurn === this.playerOne){
        //     this.whosTurn = this.playerTwo
        //     console.log('traded ', this.whosTurn)
        // } else {
        //     this.whosTurn = this.playerOne
   
            if(this.whosTurn === this.playerOne) {
            this.whosTurn = this.playerTwo
            return this.whosTurn
            // console.log('Trade success')
            } else {
                this.whosTurn = this.playerOne
                return this.whosTurn
                // console.log('Trade success')
            }
    
    }
    // if (savedPosters[i].id === Number(event.target.parentNode.id))
    placeToken(id){ 
        // var playerId = //id is going to be equal to the boards position
       
            if (!this.board[id]){
                this.board[id] = this.whosTurn.token 
            }// place token
        //id could be set to the event.target.getElement
    }

    // Checking for the win conditions

    checkHorizontalWin(){
        if(this.board.one === this.board.two && this.board.two === this.board.three){
            return this.board.one
        } else if(this.board.four === this.board.five && this.board.five === this.board.six){
            return this.board.four
        } else if(this.board.seven === this.board.eight && this.board.eight === this.board.nine){
            return this.board.seven
        } else {
            return ""
        }
    }


    checkVerticalWin() {
        if(this.board.one === this.board.four && this.board.four === this.board.seven){
            return this.board.one
        } else if(this.board.two === this.board.five && this.board.five === this.board.eight){
            return this.board.two
        } else if(this.board.three === this.board.six && this.board.six === this.board.nine){
            return this.board.three
        } else {
            return ""
        }
    }

    checkDiagnolWin() {
        if(this.board.one === this.board.five && this.board.five === this.board.nine){
            return this.board.one
        } else if(this.board.three === this.board.five && this.board.five === this.board.seven){
            return this.board.three
        } else {
            return ""
        }
    }


    checkForVictory(){
        var winningToken = this.checkHorizontalWin();
            // console.log('Horizontal Win: ', winningToken)
        if(!winningToken){//or winningToken === ""
            winningToken = this.checkVerticalWin();
            // console.log('Vertical Win: ', winningToken)
        } else if(!winningToken){
            winningToken = this.checkDiagnolWin();
            // console.log('Diagnol Win: ', winningToken)
        } else {
            // !this.gameIsOver
            // this.checkDraw()
        }

        for(var i = 0; i < this.players.length; i++){
            if(winningToken === this.players[i].token){
                this.players[i].wins += 1
                this.gameIsOver = true
                //return an interpolated string with `${this.players[i].token} ${this.players[i].name} is winner!`
                console.log('Winner!', winningToken)
            }
        }
    }

    gameOver() {
        if(this.turnCount > 8) {
            this.gameIsOver = true;
            this.isDraw = true;
        }
    }

    checkVictory() {
        console.log('checkVictory')
    }

    checkDraw() {
        if (this.turnCount === 9 && !this.gameIsOver)
            this.isDraw = true
        return "It's a draw"
    }

    resetBoard(){
        console.log('resetBoard')
    }
}