//rpssl.js

const COMP_ANSWERS = ['rock', 'paper', 'scissors', 'spok', 'lizard']
const PLAYER_INDEX = {'r': 'rock',
                      'p': 'paper',
                      's': 'scissors',
                      'k': 'spok', 
                      'l': 'lizard'}
const rsync = require('readline-sync')

let score = {You: 0, Computer: 0}
let answer = 'reply'

function invalidOption(playerOption) {
  return playerOption.trim === '' ||
  playerOption !== 'r' &&
  playerOption !== 's' &&
  playerOption !== 'p' &&
  playerOption !== 'k' &&
  playerOption !== 'l' ;
}

function prompt(message) {
  console.log(`Game => ${message}`);
}

function getComputerChoice() {
  let compIndex = (Math.floor(Math.random() * COMP_ANSWERS.length));
  let compChoice = (COMP_ANSWERS[compIndex]);
  return compChoice;
}

function getUserChoice() {
  prompt('Please pick one, rock(r), paper(p), scissors(s), spok(k), lizzard(l)');
  let playerOption = rsync.question().toLowerCase();

  while (invalidOption(playerOption)) {
    prompt('Please pick a valid choice');
    prompt('Please pick one, rock(r), paper(p), scissors(s), spok(k), lizzard(l)');
    playerOption = rsync.question().toLowerCase();
    
  } return PLAYER_INDEX[playerOption];
}

function playAgain() {
  if(score.You === 5) {
    prompt('You won the game!');
    prompt('Do you want to play again? y/n');
    let answer = rsync.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please choose yes or no.');
      answer = rsync.question().toLowerCase();
    } return answer;
  } else if(score.Computer === 5) {
    prompt('You lost the game!');
    prompt('Do you want to play again? y/n');
    let answer = rsync.question().toLowerCase()
      while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt('Please choose yes or no.');
        answer = rsync.question().toLowerCase();
      } return answer;
    }
  }

function resetScore() {
  score.You = 0;
  score.Computer = 0;
  answer = 'reply'
}

function clearScreen() {
  console.clear();
}

function chooseWinner(displayPlayerChoice, compChoice) {
  if ((displayPlayerChoice === 'spock' && compChoice === 'spock') ||
      (displayPlayerChoice === 'lizard' && compChoice === 'lizard') ||
      (displayPlayerChoice === 'paper' && compChoice === 'paper') ||
      (displayPlayerChoice === 'scissors' && compChoice === 'scissors') ||
      (displayPlayerChoice === 'rock' && compChoice === 'rock')){
        prompt('IT WAS A TIE!');
        return;
    } else if ((displayPlayerChoice === 'rock' && compChoice === 'scissors') ||
               (displayPlayerChoice === 'rock' && compChoice === 'lizard') ||
               (displayPlayerChoice === 'paper' && compChoice === 'rock') ||
               (displayPlayerChoice === 'paper' && compChoice === 'spcok') ||
               (displayPlayerChoice === 'scissors' && compChoice === 'paper') ||
               (displayPlayerChoice === 'scissors' && compChoice === 'lizard') ||
               (displayPlayerChoice === 'spock' && compChoice === 'rock') ||
               (displayPlayerChoice === 'spock' && compChoice === 'scissors') ||
               (displayPlayerChoice === 'lizard' && compChoice === 'spock') ||
               (displayPlayerChoice === 'lizard' && compChoice === 'paper')) {
                  prompt('YOU WON!');
                  score.You ++;
                  return;
      } else {
                prompt('YOU LOST!');
                score.Computer ++;
                return;
                  }
}


while (true) { 
  
  console.log(score)
  
  
  let compChoice = getComputerChoice();

  let displayPlayerChoice = getUserChoice();
clearScreen();
  prompt(`You Chose ${displayPlayerChoice}, and the computer chose ${compChoice}`);
  chooseWinner(displayPlayerChoice, compChoice);
  
  if (score.You === 5 ||
      score.Computer === 5) {
      answer = playAgain();
      }
  if (answer[0] === 'n') {
    break;
  } else if (answer[0] === 'y') {
    resetScore();
  }
 
}