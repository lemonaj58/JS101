function displayingWinner(scoreBoard) {
  if (scoreBoard.dealerScore === 5) {
    console.log('The dealer has won the game!');
  } else {
    console.log('You have won the game!');
  }
}