const express = require('express')
const app = express();
const PORT = 8000


//ROUTES
//HELLO/HOME ROUTE
app.get("/", (req,res) => {
    res.send('<h1> HOME </h1>');
});

//ADD
app.get("/add/:x/:y", (req,res) => {
    console.log("param working :" + (req.params.x )+ (req.params.y) )
    res.send( "The answer is: " + (parseInt(req.params.x) + (parseInt(req.params.y))))
})


//SUBTRACT
app.get("/subtract/:x/:y", (req,res) => {
    res.send(`Subtraction: ${req.params.x} - ${req.params.y} = ${(req.params.x)-(req.params.y)}`)
})

//MULTIPLY
app.get("/multiply/:x/:y", (req,res) => {
    res.send(`Multiply: ${req.params.x} * ${req.params.y} = ${(req.params.x)*(req.params.y)}`)
})


//DIVIDE
app.get("/divide/:x/:y", (req,res) => {
    res.send(`Divive ${req.params.x} / ${req.params.y} = ${(req.params.x)/(req.params.y)}`)
})






app.listen(PORT, ()=> {
    // console.log("AYYYE")
})

