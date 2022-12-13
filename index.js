//---required modules---
const express = require('express')

//configure express
const app = express() 


//---test
app.get('/about', (req, res) => {
    res.send("It's working")
})

//---add---
app.get("/add/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

//--subtract---
app.get("/subtract/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) - parseInt(req.params.y)));
  });

//--multiply--
app.get("/multiply/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) * parseInt(req.params.y)));
  });

//--divide--
app.get("/divide/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) / parseInt(req.params.y)));
  });


app.listen(8000)