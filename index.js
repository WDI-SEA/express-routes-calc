const express = require("express")
const app = express()
const PORT = 8000

//  home route
app.get("/", (req, res) => {
    res.send("Home Sweet Home")
})

//  add route
app.get("/add/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    let sum = x + y
    res.send(`The sum of ${req.params.x} and ${req.params.y} is ${sum}`)
})

//  subtract route
app.get("/subtract/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    let difference = x - y
    res.send(`The difference of ${req.params.x} and ${req.params.y} is ${difference}`)
})

//  multiply route
app.get("/multiply/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    let product = x - y
    res.send(`The product of ${req.params.x} and ${req.params.y} is ${product}`)
})

//  divide route
app.get("/divide/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    let quotient = parseInt(x) / parseInt(y)
    res.send(`The quotient of ${req.params.x} and ${req.params.y} is ${quotient}`)
})

// bonus

app.get("/*", (req, res) => {
    
    let numsArray = req.params["0"].split("/")
    console.log(numsArray)

    if (req.query.math === "add") {
        let result = 0
        for (num of numsArray) {
            result += parseInt(num)
        }
        res.send(`The result is ${result}`)
    } else if (req.query.math === "subtract") {
        let result = numsArray[0]
        for (num of numsArray) {
            result -= num
        }
        result += parseInt(numsArray[0])
        res.send(`The result is ${result}`)
    } else if (req.query.math === "multiply") {
        let result = 1
        for (num of numsArray) {
            result *= parseInt(num)
        }
        res.send(`The result is ${result}`)
    } else if (req.query.math === "divide") {
        let result = numsArray[0]
        for (num of numsArray) {
            result /= parseInt(num)
        }
        result *= numsArray[0]
        res.send(`The result is ${result}`)
    } else {
        res.send(req.query)
    }
})

//  listen on port for requests
app.listen(8000, () => [
    console.log(`Porta Potty ${PORT}`)
])