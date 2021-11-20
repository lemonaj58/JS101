const HTTP = require('http');
const PORT = 3003;
const URL = require('url').URL;

const HTML_START = `
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset="utf-8">
      <tittle>Loan Calculater</tittle>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>`;
const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getParams(path) {
  const myURL = new URL(path, `http://localHost:${PORT}`);
  return myURL.searchParams;
}

function calculatePayment(loanAmt, length, APR) {
  const MONTH_IN_YEAR = 12;
  const MONTHLY_INT = (APR / MONTH_IN_YEAR);
  const LENGTH_IN_MONTH = (length * MONTH_IN_YEAR);
  let payment = loanAmt * (MONTHLY_INT /
     (1 - Math.pow((1 + MONTHLY_INT), (-LENGTH_IN_MONTH))));
  return payment.toFixed(2);
}



function returnLoanInfo(params) {
  let loanAmount = Number(params.get('amount'));
  let length = Number(params.get('length'));
  let APR = Number(params.get('APR')) / 100;
  let body = '';
  if (!APR) {
    APR = .05;
  }
  let monthlyPayment = calculatePayment(loanAmount, length, APR);

  let content = `<tr><th>Amount:</th><td>$${loanAmount}</td></tr>
               <tr><th>Duration:</th><td>${length} years</td></tr>
               <tr><th>APR:</th><td>${APR * 100}%</td></tr>
               <tr><th>Monthly payment</th><td>$${monthlyPayment}</td></tr>`;


  return `${HTML_START}${content}${HTML_END}`;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  let content = returnLoanInfo(getParams(path));
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});