const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const path = require("path");
const puppeteer = require("puppeteer");
const exp = require("constants");
const app = express();


const ombro = [
  {
    id: "articulação_número",
    name: "Exercício A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "Séries: 3 | Repetições: 10",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
  {
    id: "articulação_número",
    name: "Exercício B",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "3 séries de 10 repetições",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
  {
    id: "articulação_número",
    name: "Exercício C",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "3 séries de 10 repetições",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
];
const program = [
  {
    id: "articulação_número",
    name: "Exercício A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "Séries: 3 | Repetições: 10",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
  {
    id: "articulação_número",
    name: "Exercício B",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "3 séries de 10 repetições",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
  {
    id: "articulação_número",
    name: "Exercício C",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    series: "3 séries de 10 repetições",
    img: "https://www.atemi-sports.com/wp-content/uploads/2021/08/External-Shoulder-Rotation.jpg",
  },
];

app.use(express.json());
app.use(express.urlencoded());

router.get("/", (req, response) => {
  response.render("exercises", {program});
});

router.get("/ombro", (req, res) => {
  res.render("ombro", { ombro });
});


module.exports = router;
