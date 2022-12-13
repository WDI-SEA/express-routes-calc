const express = require('express')
const app = express()

// define routes for our express app
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the calculator API</>')
})

app.get("/add/:x/:y", (req, res) => {
    res.send("The answer is: " + (Number(req.params.x) + Number(req.params.y)));
  });

  
app.get("/subtract/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x - req.params.y));
});

app.get("/multiply/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x * req.params.y));
});

app.get("/divide/:x/:y", (req, res) => {
  res.send("The answer is: " + (req.params.x / req.params.y));
});

// better to have less specific routes last
app.get('/*', (req, res) => {
  console.log('req.query:', req.query)
  console.log('req.params:', req.params)
  //break up url route params into an array
  const nums = req.params[0].split('/').map(string => Number(string))
  //console.log(nums)
  let response = ''
  switch(req.query.math) {
    case 'add':
      const sum = nums.reduce((total, current) => total + current)
      response += sum
      break
    case 'subtract':
      const diff = nums.reduce((total, current) => total - current)
      response += diff
      break
    case 'divide':
      const div = nums.reduce((total, current) => total / current)
      response += div
      break
    case 'multiply':
      const pro = nums.reduce((total, current) => total * current)
      response += pro
      break
    default:
      // bad math
      response = `bad math query string: ${req.query.math}`
  }
  res.send(response)
})

app.listen(8000, function(){
    console.log('server is running hi ', 8000)
})