const express = require("express")
const app = express()
const PORT = 8000

//  home route
app.get("/", (req, res) => {
    res.send("Home Sweet Home")
})

//  add route
app.get("/add/:x/:y", (req, res) => {
    let num1 = req.params.x
    let num2 = req.params.y
    let sum += num1
    sum += num2
    res.send(`The sum of ${req.params.x} and ${req.params.y} is ${sum}`)
})

//  subtract route
app.get("/subtract/:x/:y", (req, res) => {
    res.send(`The difference of ${req.params.x} and ${req.params.y} is ${req.params.x - req.params.y}`)
})

//  multiply route
app.get("/multiply/:x/:y", (req, res) => {
    res.send(`The product of ${req.params.x} and ${req.params.y} is ${req.params.x * req.params.y}`)
})

//  divide route
app.get("/divide/:x/:y", (req, res) => {
    res.send(`The quotient of ${req.params.x} and ${req.params.y} is ${req.params.x / req.params.y}`)
})



//  listen on port for requests
app.listen(8000, () => [
    console.log(`Porta Potty ${PORT}`)
])