//importing the express module
const express = require("express");

const app = express();

// Defining the calculator routes
app.get("/add/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  const result = x + y;
  res.send(`${x} + ${y} = ${result}`);
});

app.get("/subtract/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  const result = x - y;
  res.send(`${x} - ${y} = ${result}`);
});

app.get("/multiply/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  const result = x * y;
  res.send(`${x} * ${y} = ${result}`);
});

app.get("/divide/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  const result = x / y;
  res.send(`${x} / ${y} = ${result}`);
});

// Starting the server on port 3000
app.listen(3000, () => {
  console.log("Calculator app listening on port 3000!");
});

// Path: index.html
// http://localhost:3000/add/2/3 (2 + 3 = 5)
// http://localhost:3000/subtract/5/3 (5 - 3 = 2)
// http://localhost:3000/multiply/4/5 (4 * 5 = 20)
// http://localhost:3000/divide/9/3 (9 / 3 = 3)
