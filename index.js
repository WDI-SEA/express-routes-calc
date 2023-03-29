// require express package
const express = require("express")
// invoke variable to create instance of app
const app = express()
// set a port number
const PORT = 3000

app.listen(PORT, () => {
    console.log(`That's port ${PORT}`)
})
// ROUTES
// home route
// app.get("/", (request, response) => {
//     response.send("hello world")
// })
app.get("/add/:x/:y", (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) + parseInt(y)
    res.send(`${x} + ${y} = ${result}`)
})
app.get("/subtract/:x/:y", (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) - parseInt(y)
    res.send(`${x} - ${y} = ${result}`)
})
app.get("/multiply/:x/:y", (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) * parseInt(y)
    res.send(`${x} * ${y} = ${result}`)
})
app.get("/divide/:x/:y", (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) / parseInt(y)
    res.send(`${x} / ${y} = ${result}`)
})


 // bonus
//  app.get("/", (req, res) => {
//    res.send(req.params)
//    console.log(req.query)

//    let numArray = req.params["0"].split("/")
//    console.log(numArray)
   
//    if (req.query.math === "add") {
//         let result = 0
    
//         for (num of numArray) {
//         result += parseInt(num)
//     }
//     res.send(`The result is ${result}`)
//    } else if(req.query.math === "subtract") {
//         let result = numArray[0]   
        
//         for (num of numArray) {
//             result -= parseInt(num)
//         }
//         result += parseInt(numArray[0])
//         res.send(`The result is ${result}`)
//    } else if (req.query.math === "multiply"){
//         let result = 1

//         for (num of numArray) {
//             result *= parseInt(num)
//         }
//         res.send(`The result is ${result}`)
//     } else if (req.query.math === "divide"){
//         let result = numArray[0]

//         for (num of numArray) {
//             result /= parseInt(num)
//         }
//         result *= numsArray[0]
//         res.send(`The result is ${result}`)
//     } else {
//     res.send(req.query)
//     }
//  })