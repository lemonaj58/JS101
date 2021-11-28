/* eslint-disable no-unused-vars */
const express = require("express");
const app = express();

const morgan = require("morgan");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

const showEnglishView = (req, res) => {
  res.render("hello-world-english", {
    currentPath: req.path,
    language: "en-US"
  });
};

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/", showEnglishView);

app.get("/english", showEnglishView);

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentPath: req.path,
    language: "fr-FR"
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentPath: req.path,
    language: "en-sr-Cyrl-rs"
  });
});

app.get("/german", (req, res) => {
  res.render("hello-world-german.pug", {
    currentPath: req.path,
    language: "de-DE"
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});