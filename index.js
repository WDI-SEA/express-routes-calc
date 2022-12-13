//require express mpdule & invoke it
const express = require("express")
const app = express ()

app.get('/add/:input/:input1', (request, response) => {
    console.log('request.params: ', request.params)
    let add = parseInt(request.params.input) + parseInt(request.params.input1)
    response.send("Our parameter is " + add + ".");
})

app.get('/subtract/:input/:input1', (request, response) => {
    console.log('request.params: ', request.params)
    let subtract = parseInt(request.params.input) - parseInt(request.params.input1)
    response.send("Our parameter is " + subtract + ".");
})

app.get('/multiply/:input/:input1', (request, response) => {
    console.log('request.params: ', request.params)
    let multiply = parseInt(request.params.input) * parseInt(request.params.input1)
    response.send("Our parameter is " + multiply + ".");
})

app.get('/divide/:input/:input1', (request, response) => {
    console.log('request.params: ', request.params)
    let divide= parseInt(request.params.input) / parseInt(request.params.input1)
    response.send("Our parameter is " + divide + ".");
})

app.listen(8000, function () {
    console.log('hello world')
})