// require packages
const express = require('express')
//configure our express app
const app = express()
const PORT = 3000

// define routes for our express app
app.get('/', (req, res) => {
    res.send('<h1> Welcome to the calculatoor api </h1>')
})

// GET / add/ :x/:y
app.get('/add/:x/:y', (req, res) => {
    //console.log(req, params)
    //console.log(Number(req.params.x) + Number(req.params.y))

    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
})
// GET/ sub/ :x/:y
app.get('/sub/:x/:y', (req, res) => {
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
})

// GET / mult / :x/ :y
app.get('/mult/;x/:y', (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
})
app.get('/div/:x/:y', (req, res) => {

})

// GET / div / :x/ :y
app.get('/div/;x/:y', (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
})
app.get('/div/:x/:y', (req, res) => {

})
// listen on port
app.listen(PORT, () => {
    console.log(`you are listening to the smooth sounds of port ${PORT} in morning`)
})