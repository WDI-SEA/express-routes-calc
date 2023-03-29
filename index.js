const express = require('express')
const app = express()

app.get('/multiply/:x/:y', (req, res) => {
    res.send(`the multiplicatoin of ${req.params.x} * ${req.params.y} = ${req.params.x * req.params.y}`)
})

app.get('/add/:x/:y', (req, res) => {
    let num1 = parseInt(req.params.x)
    let num2 = parseInt(req.params.y)
    let sum = num1 + num2
    res.send(`the addition of ${num1} + ${num2} = ${sum}`)
})

app.get('/subtract/:x/:y', (req, res) => {
    let num1 = parseInt(req.params.x)
    let num2 = parseInt(req.params.y)
    let answer = num1 - num2
    res.send(`the subtraction of ${num1} - ${num2} = ${answer}`)
})

app.get('/divide/:x/:y', (req, res) => {
    let num1 = parseInt(req.params.x)
    let num2 = parseInt(req.params.y)
    let answer = num1/num2
    res.send(`the division of ${num1} / ${num2} = ${answer}`)
})

app.listen(8000, () => {
    console.log('server linked')
})

