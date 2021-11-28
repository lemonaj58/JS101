/* eslint-disable no-unused-vars */
const express = require("express");
const app = express();
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US english site"
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
  {
    path: "/german",
    flag: "flag-of-Germany.png",
    alt: "Deutsche Flagge",
    title: "gehe zur deutschen Seite"
  }
];
const morgan = require("morgan");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

const showEnglishView = (req, res) => {
  res.render("hello-world-english", {
    countries: COUNTRY_DATA,
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
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "fr-FR"
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "en-sr-Cyrl-rs"
  });
});

app.get("/german", (req, res) => {
  res.render("hello-world-german.pug", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "de-DE"
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});