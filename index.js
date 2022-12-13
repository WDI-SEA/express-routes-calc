const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/add/:x/:y', function (req, res) {
  let x = parseInt(req.params.x)
  let y = parseInt(req.params.y)
  let sum = (x + y).toString()
  res.send(sum)
});

app.get('/subtract/:x/:y', function (req, res) {
  let x = parseInt(req.params.x)
  let y = parseInt(req.params.y)
  let difference = (x - y).toString()
  res.send(difference)
});

app.get('/multiply/:x/:y', function (req, res) {
  let x = parseInt(req.params.x)
  let y = parseInt(req.params.y)
  let product = (x * y).toString()
  res.send(product)
});

app.get('/divide/:x/:y', function (req, res) {
  let x = parseInt(req.params.x)
  let y = parseInt(req.params.y)
  let division = (x / y).toString()
  res.send(division)
});

app.listen(PORT, function () {
  console.log((`listening to the smooth sounds of port ${PORT} in the morning 🌊`))
});