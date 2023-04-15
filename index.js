const express = require("express")
const app = express()
const PORT = 8000


app.get('/', (req, res) => {
    res.send('Hello, World!')
  });
  
  app.get("/about", (req, res) => {
    //res.send("<h1>About Page </h>")
    const obj = {
        name: "Jaron"
    }
    res.json(obj)
})



app.get("/multiply/:x/:y", (req, res) => {
    res.send(`the multiplication result of ${req.params.x} * ${req.params.y} = ${req.params.x * req.params.y}`)
})


app.get("/add/:x/:y", (req, res) => {
    x = req.params.x
    y = req.params.y
    let result =parseInt(x) + parseInt(y)
    res.send(`the addition result of ${req.params.x} + ${req.params.y} =  ${result}`)
})


app.get("/subtract/:x/:y", (req, res) => {
    x = req.params.x
    y = req.params.y
    let result =parseInt(x) - parseInt(y)
    res.send(`the subtraction result of ${req.params.x} - ${req.params.y} =  ${result}`)
})


app.get("/divide/:x/:y", (req, res) => {
    res.send(`the division result of ${req.params.x} divide by ${req.params.y} = ${req.params.x / req.params.y}`)
})



app.get('/*', (req, res) => {

    let numsArray = req.params["0"].split("/")

    if(req.query.math === "add") {
        let result = 0

        for (num of numsArray) {
            result += parseInt(num)
        }
        res.send(`the results ${result}`)
    }
  });



app.listen(8000, () =>{
    console.log(`i love the smell of port ${PORT}`)
})