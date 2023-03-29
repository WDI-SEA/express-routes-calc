
const express = require('express');
const app = express();
const PORT = 8000;

// Add route
app.get('/add/:x/:y', (req, res) => {
  const x = Number(req.params.x);
  const y = Number(req.params.y);
  const result = x + y;
  res.send(`The sum of ${x} and ${y} is ${result}`);
});

// Subtract route
app.get('/subtract/:x/:y', (req, res) => {
  const x = Number(req.params.x);
  const y = Number(req.params.y);
  const result = x - y;
  res.send(`The difference between ${x} and ${y} is ${result}`);
});

// Multiply route
app.get('/multiply/:x/:y', (req, res) => {
  const x = Number(req.params.x);
  const y = Number(req.params.y);
  const result = x * y;
  res.send(`The product of ${x} and ${y} is ${result}`);
});

// Divide route
app.get('/divide/:x/:y', (req, res) => {
  const x = Number(req.params.x);
  const y = Number(req.params.y);
  const result = x / y;
  res.send(`The quotient of ${x} divided by ${y} is ${result}`);
});

// Start the server
app.listen(PORT, () => {
  console.log('Server started on port 8000');
});