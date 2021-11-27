/* eslint-disable no-unused-vars */
const express = require("express");
const app = express();
const morgan = require("morgan");
const writeLog = (req, res) => {
  let timeStamp = String(new Date()).substring(4,24);
  console.log(`${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`);
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

const showEnglishView = (req, res) => {
  res.render("hello-world-english");
};

app.get("/", showEnglishView);

app.get("/english", showEnglishView);

app.get("/french", (req, res) => {
  res.render("hello-world-french");
  writeLog(req, res);
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
  writeLog(req, res);
});

app.get("/german", (req, res) => {
  res.render("hello-world-german.pug");
  writeLog(req, res);
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});