// require packages
const express = require('express')

// configure our express app
const app = express()
const PORT = 3000

app.get('/add/:x/:y', (req, res) => {

    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
})

app.get('/sub/:x/:y', (req, res) => {
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
})

app.get('/div/:x/:y', (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
})

app.get('/mult/:x/:y', (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
})

app.get('/*', (req, res) => {
    console.log('req.query:', req.query)
    console.log('req.params:', req.params)
    // break up url route params into an array
    const ints = req.params[0].split('/').map(string => Number(string))
    console.log(ints)
    let resp = ''
    const maths = {
        add: () => {
            const sum = ints.reduce((total, current) => total + current)
            console.log(sum)
            resp += sum
        },
        sub: () => {
            const diff = ints.reduce((total, current) => total - current)
            resp += diff
        },
        div: () => {
            const div = ints.reduce((total, current) => total / current)
            resp += div
        },
        mult: () => {
            const mult = ints.reduce((total, current) => total * current)
            resp += mult
        }
    }

    if (req.query.math in maths) {
        maths[req.query.math]()
    } else {
        resp = `Bad math query string: ${req.query.math}`
    }

    res.send(resp)
})

// listen on port
app.listen(PORT, () => {
    console.log(`you are live at port ${PORT} `)
})