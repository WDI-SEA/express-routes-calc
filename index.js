// require express package
const express = require("express")
// invoke variable to create instance of app
const app = express()
// set a port number
// const PORT = 8000

// ROUTES
// home route
// app.get("/", (request, response) => {
//     response.send("hello world")
// })
app.get ("/add/:x:y", (req, res) => {
    res.send((req.params.x) + (req.params.y))
})
app.get ("/subtract/:x:y", (req, res) => {
    res.send((req.params.x) - (req.params.y))
})
app.get ("/multiply/:x/:y", (req, res) => {
    res.send((req.params.x) * (req.params.y))
})
app.get ("/divide/:x/:y", (req, res) => {
    res.send(req.params.x) / (req.params.y)
})
