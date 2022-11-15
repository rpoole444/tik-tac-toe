class Game {
  constructor(player1, player2) {
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
    };
    this.playerOne = player1;
    this.playerTwo = player2;
    this.whosTurn = player1;
    this.turnCount = 0;
    this.gameIsOver = false;
    this.isDraw = false;
    this.gameCount = 0;
    this.winningPlayer = null;
    this.startingPlayer = player1;
  }

  tradeTurns() {
    if (this.whosTurn === this.playerOne) {
      this.whosTurn = this.playerTwo;
    } else {
      this.whosTurn = this.playerOne;
    }
  }

  placeToken(id) {
    if (!this.board[id]) {
      this.board[id] = this.whosTurn.token;
    }
    this.turnCount++;
  }

  checkHorizontalWin() {
    if (
      this.board.one === this.board.two &&
      this.board.two === this.board.three &&
      this.board.one !== ""
    ) {
      return this.board.one;
    } else if (
      this.board.four === this.board.five &&
      this.board.five === this.board.six &&
      this.board.four !== ""
    ) {
      return this.board.four;
    } else if (
      this.board.seven === this.board.eight &&
      this.board.eight === this.board.nine &&
      this.board.seven !== ""
    ) {
      return this.board.seven;
    } else {
      return "";
    }
  }

  checkVerticalWin() {
    if (
      this.board.one === this.board.four &&
      this.board.four === this.board.seven &&
      this.board.one !== ""
    ) {
      return this.board.one;
    } else if (
      this.board.two === this.board.five &&
      this.board.five === this.board.eight &&
      this.board.two !== ""
    ) {
      return this.board.two;
    } else if (
      this.board.three === this.board.six &&
      this.board.six === this.board.nine &&
      this.board.three !== ""
    ) {
      return this.board.three;
    } else {
      return "";
    }
  }

  checkDiagonalWin() {
    if (
      this.board.one === this.board.five &&
      this.board.five === this.board.nine &&
      this.board.one !== ""
    ) {
      return this.board.one;
    } else if (
      this.board.three === this.board.five &&
      this.board.five === this.board.seven &&
      this.board.three !== ""
    ) {
      return this.board.three;
    } else {
      return "";
    }
  }

  checkForVictory() {
    var winningToken;
    var horizontalToken = this.checkHorizontalWin();
    var verticalToken = this.checkVerticalWin();
    var diagonalToken = this.checkDiagonalWin();
    if (horizontalToken) {
      winningToken = horizontalToken;
    } else if (verticalToken) {
      winningToken = verticalToken;
    } else if (diagonalToken) {
      winningToken = diagonalToken;
    }

    var winningPlayer;
    if (winningToken === this.playerOne.token) {
      winningPlayer = this.playerOne;
    } else if (winningToken === this.playerTwo.token) {
      winningPlayer = this.playerTwo;
    } else {
      winningPlayer = null;
    }

    if (winningPlayer) {
      winningPlayer.increaseWins();
      this.winningPlayer = winningPlayer;
      this.gameOver();
      return winningPlayer;
    }
  }

  checkDraw() {
    if (this.turnCount === 9 && !this.winningPlayer) {
      this.gameOver();
    }
  }

  gameOver() {
    if (this.turnCount === 9 && !this.winningPlayer) {
      this.isDraw = true;
      this.gameIsOver = true;
      this.turnCount = 0;
      this.gameCount++;
    } else {
      this.isDraw = false;
      this.gameIsOver = true;
      this.turnCount = 0;
      this.gameCount++;
    }
  }

  switchStartingPlayer() {
    if (this.startingPlayer === this.playerOne) {
      this.startingPlayer = this.playerTwo;
    } else {
      this.startingPlayer = this.playerOne;
    }
  }

  resetBoard() {
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
    this.winningPlayer = null;
    this.switchStartingPlayer();
    this.whosTurn = this.startingPlayer;
  }
}
