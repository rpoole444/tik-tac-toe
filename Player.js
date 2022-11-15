class Player {
  constructor(playerName, playerToken) {
    this.name = playerName;
    this.token = playerToken;
    this.wins = 0;
    this.isWinner = 0;
  }

  increaseWins() {
    this.wins += 1;
  }
}
