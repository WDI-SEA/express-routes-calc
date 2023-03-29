const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("sup");
});

app.get("/add/:x/:y", (req, res) => {
  res.send("your total: " + (parseInt(req.params.x) + parseInt(req.params.y)));
});

app.get("/subtract/:x/:y", (req, res) => {
  res.send("your total: " + (parseInt(req.params.x) - parseInt(req.params.y)));
});

app.get("/multiply/:x/:y", (req, res) => {
  res.send("your total: " + parseInt(req.params.x) * parseInt(req.params.y));
});

app.get("/divide/:x/:y", (req, res) => {
  res.send("your total: " + parseInt(req.params.x) / parseInt(req.params.y));
});

app.listen(8000, () => {
  console.log("hiya");
});
