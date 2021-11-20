const HTTP = require('http');
const PORT = 3002;
const URL = require('url').URL;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function rollDice(params) {
  let rolls = Number(params.get('rolls'));
  let sides = Number(params.get('sides'));
  let body = '';
  if (!Number(params.get('rolls'))) {
    rolls = 1;
  }
  if (!Number(params.get('sides'))) {
    sides = 6;
  }


  for (let index = 1; index <= rolls; index += 1) {
    if (index === rolls) {
      body += `${dieRoll(sides)}`;
      break;
    }
    body += `${dieRoll(sides)}, `;
  }

  return body;
}

function dieRoll(sides) {
  return Math.ceil(Math.random() * sides);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = rollDice(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${content}\n`);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});