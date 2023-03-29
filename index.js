const express = require('express')
const app = express()
const PORT = 8000

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/add/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x) + parseInt(req.params.y)}`)
})

app.get("/subtract/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x) - parseInt(req.params.y)}`)
})

app.get("/multiply/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x) * parseInt(req.params.y)}`)
})

app.get("/divide/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x) / parseInt(req.params.y)}`)
})

app.get('/*', (req, res) => {
    let myParams = req.params[0].split("/")
    let result
    if (req.query.math == "add") {
        result = myParams.reduce((total, num) => {
            return parseInt(total) + parseInt(num)
        })
    } else if (req.query.math == "subtract") {
        result = myParams.reduce((total, num) => {
            return total - parseInt(num)
        })
    } else if (req.query.math == "multiply") {
        result = myParams.reduce((total, num) => {
            return total * parseInt(num)
        })
    } else if (req.query.math == "divide") {
        result = myParams.reduce((total, num) => {
            return total / parseInt(num)
        })
    }
    res.send(`${result}`)
}) 

app.listen(8000, () => {
    console.log(`Welcome to port ${PORT}`)
})