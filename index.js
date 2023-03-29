const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`That's no moon, that's port ${PORT} `)
})


// <------------- Routes --------------->

// addition
// app.get('/add/:x/:y', (req, res) => {
//     let x = req.params.x
//     let y = req.params.y
//     let result = parseInt(x) + parseInt(y)
//     res.send(`${x} + ${y} = ${result}`)
// })

// // subtraction
// app.get('/subtract/:x/:y', (req, res) => {
//     let x = req.params.x
//     let y = req.params.y
//     let result = parseInt(x) - parseInt(y)
//     res.send(`${x} - ${y} = ${result}`)
// })

// // multiplication
// app.get('/multiply/:x/:y', (req, res) => {
//     let x = req.params.x
//     let y = req.params.y
//     let result = parseInt(x) * parseInt(y)
//     res.send(`${x} x ${y} = ${result}`)
// })

// // division
// app.get('/divide/:x/:y', (req, res) => {
//     let x = req.params.x
//     let y = req.params.y
//     let result = parseInt(x) / parseInt(y)
//     res.send(`${x} / ${y} = ${result}`)
// })


// bonus

app.get('/*', (req,res) => {

    let numsArray = req.params["0"].split("/")
    console.log(numsArray)

    if (req.query.math === "add") {
        let result = 0

        for (num of numsArray) {
            result += parseInt(num)
        }
        res.send(`The result is ${result}`)
    } else if(req.query.math === "subtract") {
        let result = numsArray[0]

        for (num of numsArray) {
            result -= parseInt(num)
        }
        result += parseInt(numsArray[0])
        res.send(`The result is ${result}`)
    } else if (req.query.math === "multiply") {
        let result = 1

        for (num of numsArray) {
            result *= parseInt(num)
        }
        res.send(`The result is ${result}`)
    } else if (req.query.math === "divide")  {
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