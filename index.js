const express = require("express")
const app = express()

app.get('/add/:num1/:num2', (req, res) => {
    res.send(`${req.params.num1} + ${req.params.num2} =`, req.params.num1 + req.params.num2)
})

app.get('/subtract/:num1/:num2', (req, res) => {
    res.send(`${req.params.num1} - ${req.params.num2} =`, req.params.num1 - req.params.num2)
})

app.get('/multiply/:num1/:num2', (req, res) => {
    res.send(`${req.params.num1} * ${req.params.num2} =`, req.params.num1 * req.params.num2)
})

app.get('/divide/:num1/:num2', (req, res) => {
    res.send(`${req.params.num1} / ${req.params.num2} =`, req.params.num1 / req.params.num2)
})


app.listen(8000, (req, res)=>{
    console.log("listening to port " + 80000)
    // let n = 1
    // let n2 = 2
    // console.log(`${n} + ${n2} =`, n*n2)
})
