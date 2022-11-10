
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
        this.players = [player1, player2];
        this.whosTurn = "player1";
        this.firstPlayer = "player1"
        this.turnCount = 0
        this.gameOver = false;
        this.isDraw = false;
    }
    
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

    checkForWin(){
        var winningToken = this.checkHorizontalWin()
        if(!winningToken){
            winningToken = this.checkVerticalWin
        } else if(!winningToken){
            winningToken = this.checkDiagnolWin
        }
        for(var i = 0; i < this.players; i++){
            if(winningToken === this.players[i].token){
                this.players[i].wins += 1
                this.gameOver = true
            }
        }
    }

    gameOver() {
        if(this.turnCount > 8) {
            this.gameOver = true;
            this.isDraw = true;
        }
    }

    checkPlayerTurn(){
        this.turnCount += 1
        this.checkForWin();
        this.tradeTurns();
        this.gameOver();
    }

    tradeTurns(){
        if(this.firstPlayer === 'player1'){
         this.firstPlayer = 'player2'
        // console.log(this.whosTurn)
        } else {
            this.firstPlayer = 'player1'
        }
    }


    checkVictory() {
        console.log('checkVictory')
    }

    checkDraw() {
        console.log("checkDraw")
    }

    resetBoard(){
        console.log('resetBoard')
    }
}