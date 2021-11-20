const HTTP = require('http');
const PORT = 3003;
const URL = require('url').URL;
const HANDLEBARS = require('handlebars');

const SOURCE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
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
        font-size: 1.5rem;
      }
      th {
        text-align: right;
      }
      td {
        text-align: center;
      }
      th,
      td {
        padding: 0.5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
          <tr>
            <th>Amount:</th>
            <td>
              <a href='/?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
            </td>
            <td>$ {{amount}}</td>
            <td>
              <a href='/?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
            </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <a href='/?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
            </td>
            <td>{{duration}} years</td>
            <td>
              <a href='/?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
            </td>
          </tr>
          <tr>
            <th>APR:</th>
            <td colspan='3'>{{APR}}%</td>
          </tr>
          <tr>
            <th>Monthly payment:</th>
            <td colspan='3'>$ {{payment}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
`;
const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(SOURCE);

function render(template, data) {
  let html = template(data);
  return html;
}
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
  let data = {};
  data.amount = Number(params.get('amount'));
  data.amountIncrement = data.amount + 100;
  data.amountDecrement = data.amount - 100;
  data.duration = Number(params.get('duration'));
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;

  data.APR = Number(params.get('APR'));
  if (!data.APR) {
    data.APR = .05;
  }
  data.payment = calculatePayment(data.amount, data.duration, data.APR / 100);
  return data;
}

const SERVER = HTTP.createServer((req, res) => {
  // eslint-disable-next-line no-unused-vars
  let method = req.method;
  let path = req.url;
  if (path === '/favicon.ico') {
    res.statusCode = 400;
    res.end();
  } else {
    let data = returnLoanInfo(getParams(path));
    let content = render(LOAN_OFFER_TEMPLATE, data);
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});