const port = 8000

const express = require('express')
const app = express()

//Routes 
    app.get('/', (req, res) => {
    res.send("You've reached the home route!");
  });
  //browser test
  app.get('/about', (req, res) => {
    res.send('This is a practice app to learn about express routes.');
  });


  app.get("/add/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

  app.get("/subtract/:x/:y", (req, res) => {
    res.send("The answer is: " - (parseInt(req.params.x) - parseInt(req.params.y)));
  });

  app.get("/multiply/:x/:y", (req, res) => {
    res.send("The answer is: " * (parseInt(req.params.x) * parseInt(req.params.y)));
  });

  app.get("/divide/:x/:y", (req, res) => {
    res.send("The answer is: " / (parseInt(req.params.x) / parseInt(req.params.y)));
  });

  app.get("/add/*", (req, res) => {
    let myParams = req.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return total + (parseInt(num))
    }, 0);
    res.send("The answer is  " + result);
});





app.listen(port);