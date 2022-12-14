// require packages
const express = require("express")

//configure express app
const app = express()
const PORT = 3000 // NOTE I tried 5000 and 7000 first - fatal error, already in use 

//define routes for express app
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Calculator API</h1>")
})

// GET /add/:x/:y
app.get("/add/:x/:y", (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.x) + Number(req.params.y))
    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
})
// GET /sub/:x/:y
app.get("/sub/:x/:y", (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.x) - Number(req.params.y))
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
})
// GET /mult/:x/:y
app.get("/mult/:x/:y", (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.x) * Number(req.params.y))
    res.send(`${req.params.x} x ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
})
// GET /div/:x/:y
app.get("/div/:x/:y", (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.x) / Number(req.params.y))
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
})

// listen on port
app.listen(PORT, () => {
    console.log("This is port " + PORT)
})