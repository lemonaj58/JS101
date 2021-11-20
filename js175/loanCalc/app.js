const HTTP = require('http');
const PORT = 3003;
const URL = require('url').URL;

const HTML_START = `
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset="utf-8">
      <tittle>Loan Calculater</tittle>
      <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
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

// eslint-disable-next-line max-lines-per-function
function returnLoanInfo(params) {
  let loanAmount = Number(params.get('amount'));
  let duration = Number(params.get('duration'));
  let APR = Number(params.get('APR')) / 100;
  if (!APR) {
    APR = .05;
  }
  let monthlyPayment = calculatePayment(loanAmount, duration, APR);

  let content = `<tr>
                 <th>Amount:</th>
                   <td>
                     <a href='/?amount=${loanAmount - 100}&duration=${duration}'>- $100</a>
                   </td>
                   <td>$${loanAmount}</td>
                   <td>
                     <a href='/?amount=${loanAmount + 100}&duration=${duration}'>+ $100</a>
                   </td>
                 </tr>
                 <tr>
                   <th>Duration:</th>
                   <td>
                     <a href='/?amount=${loanAmount}&duration=${duration - 1}'>- 1 year</a>
                   </td>
                   <td>${duration} years</td>
                   <td>
                     <a href='/?amount=${loanAmount}&duration=${duration + 1}'>+ 1 year</a>
                   </td>
                 </tr>
                 <tr>
                   <th>APR:</th>
                   <td colspan='3'>${APR * 100}%</td>
                 </tr>
                 <tr>
                   <th>Monthly payment:</th>
                   <td colspan='3'>$${monthlyPayment}</td>
                 </tr>`;

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