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

app.get("/*", (req, res) => {
    //console.log(req.params)
    let numbers = req.params[0].split('/')
    //req.query.math => request.query(whatever comes after '/').math(mathematical functions)
    if (req.query.math === 'add') {
        let num = 0
        for(let i = 0; i < numbers.length; i++) {
            num += Number(numbers[i])
        }
        res.send(`The sum is ${num}`)
    } else if (req.query.math === 'subtract') {
        let num = 0
        numbers.forEach(number => {
            num -= Number(number)
        })
        res.send(`The difference is ${num}`)
    } else if (req.query.math === 'multiply') {
        let num = 1
        numbers.forEach(number => {
            num *= Number(number)
        })
        res.send(`The product is ${num}`)
    } else if (req.query.math === 'divide') {
        let num = 1
        numbers.forEach(number => {
            num /= Number(number)
        })
        res.send(`The quotient is ${num}`)
    } 
})

app.listen(8000)