// require and invoke the express module
const express = require('express')
const app = express()
const port = 1000

// multiply
app.get("/multiply/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) * parseInt(req.params.y)));
});

app.get("/divide/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) / parseInt(req.params.y)));
});

app.get("/add/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

app.get("/subtract/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) - parseInt(req.params.y)));
});

app.get("/*", (req, res) => {
    const numbers = req.params[0].split('/')      
    if (req.query.math === 'add'){
        let sum = 0
        for(let i = 0; i<numbers.length; i++) {
            sum += Number(numbers[i])
        }
        res.send(`the addition sum is ${sum}`)
    } else if (req.query.math === 'subtract'){
        let sum = 0 
        numbers.forEach(number => {
            sum -= Number(number)
        })
        res.send(`the subtraction sum is ${sum}`)
    } else if (req.query.math === 'divide'){
        let sum = 1 
        numbers.forEach(number => {
            sum /= Number(number)
        })
        res.send(`the division sum is ${sum}`)
    } else if (req.query.math === 'multiply') {
        let sum = 1
        numbers.forEach(number => {
            sum *= Number(number)
        })
        res.send(`the multiplication sum is ${sum}`)
    }
  });

// Listener
app.listen(port,function() {
    console.log('server is live and loading on port', port)
})