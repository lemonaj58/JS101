//carLoanCalculator.js
const MESSAGES = require('./mortgageCalculatorMessages.json');
const rsync = require('readline-sync');
let months;
let monthlyInterstRate;
let amount;
let answer;

function prompt(MESSAGES) {
  console.log(` => ${MESSAGES}`);
}

function monthsFromYears(years) {
  let months = (Number(years) * 12);
  return months;
}

function calcMonthlyIntRate(apr) {
  let monthlyInterstRate = (Number(apr) / 12 / 100);
  return monthlyInterstRate;
}

function calculate(monthlyInterstRate, months, amount) {
  let monthlyPayment = amount * (monthlyInterstRate /
  (1 - Math.pow((1 + monthlyInterstRate), (-months))));
  return monthlyPayment;
}


function invalidNumber(number) {
  return number.trim() === '' || Number(number) < 0 ||
  Number.isNaN(Number(number));
}
function getLoanAmount() {
  prompt(MESSAGES[`askLoanAmount`]);
  let amount = rsync.question();

  while (invalidNumber(amount)) {
    prompt(MESSAGES['invalidNumber']);
    amount = rsync.question();
  }
  let realAmount = Number(amount);
  return realAmount;
}

function getMonthlyIntRate() {
  prompt(MESSAGES["askAPR"]);
  let apr = rsync.question();

  while (invalidNumber(apr)) {
    prompt(MESSAGES['invalidNumber']);
    apr = rsync.question();
  }
  monthlyInterstRate = (calcMonthlyIntRate(apr));
  return monthlyInterstRate;
}
function getLoanDuration() {
  prompt(MESSAGES["askLoanDuration"]);
  let years = rsync.question();
  while (invalidNumber(years)) {
    prompt(MESSAGES['invalidNumbers']);
    years = rsync.question();
  }
  months = Number(monthsFromYears(years));
  return months;
}

while (true) {
  prompt(MESSAGES[`greetings`]);

  let amount = getLoanAmount();

  let monthlyInterstRate = getMonthlyIntRate();
  let months = getLoanDuration();
  prompt(amount);
  prompt(monthlyInterstRate);
  prompt(months);

  let payment = calculate(monthlyInterstRate, months, amount);
  prompt(MESSAGES["paymentAmount"] + ` ${payment}`);

  prompt(MESSAGES["again"]);
  let answer = rsync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(MESSAGES["invalidAnswer"]);
    answer = rsync.question().toLowerCase();
  }
  if (answer[0] === 'n') {
    break;
  }
}