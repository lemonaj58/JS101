//rockPaperScissors.js
const rsync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let playerchoice;
function prompt(message) {
  console.log(`RPS => ${message}`);
}

function validChoice(playerChoice) {
  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt('please choose either rock, paper scissors');
    playerChoice = rsync.question().toLowerCase();
  }
}

function choosingWinner(playerChoice, computerChoice) {
  if ((playerChoice === 'rock' && computerChoice === 'rock') ||
     (playerChoice === 'paper' && computerChoice === 'paper') ||
     (playerChoice === 'scissors' && computerChoice === 'scissors')) {
    prompt('You tied!');
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock') ||
              (playerChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You won!');
  } else {
    prompt('You lost!');
  }
}

while (true) {
  prompt('Welcome to Rock, Paper, Scissors');
  prompt('please choose either rock, paper or scissors');
  let playerChoice = rsync.question().toLowerCase();
  validChoice(playerChoice);
  prompt(playerChoice);

  let compIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = (VALID_CHOICES[compIndex]);
  prompt(`the computer chose ${computerChoice}`);
  choosingWinner(playerChoice, computerChoice);

  prompt('Do you want to play again?');
  let answer = rsync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter yes, or no.');
    answer = rsync.question().toLowerCase();
  }
  if (answer === 'no') {
    break;
  }
}
