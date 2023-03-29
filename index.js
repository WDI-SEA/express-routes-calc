// require express package
const express = require("express");
// create instance of express app
const app = express();
// set a port variable 
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/add/:x/:y", (req, res) => {
    res.send(`${req.params.x} + ${req.params.y} = ${parseInt(req.params.x) + parseInt(req.params.y)}`);
});

app.get("/subtract/:x/:y", (req,res) => {
    res.send(`${parseInt(req.params.x)} - ${parseInt(req.params.y)} = ${parseInt(req.params.x) - parseInt(req.params.y)}`);
})

app.get("/multiply/:x/:y", (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} = ${parseInt(req.params.x) * parseInt(req.params.y)}`)
})

app.get("/divide/:x/:y", (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${(parseInt(req.params.x) / parseInt(req.params.y)).toFixed(2)}`)
})

app.get("/add/*", (req, res) => {
    let myParams = req.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return total + parseInt(num);
    }, 0);
    res.send("The answer is  " + result);
})
app.get("/subtract/*", (req, res) => {
    let myParams = req.params[0].split("/");
    let totalValue = 0;
    for (let i = 0; i < myParams.length; i++) {
        totalValue -= myParams[i];
        // return parseInt(totalValue);
    }
    res.send("The answer is  " + totalValue);
})

app.get("/multiply/*", (req, res) => {
    let myParams = req.params[0].split("/");
    let totalValue = 1;
    myParams.forEach(number => {
        totalValue *= number;
    })
    res.send("The answer is  " + totalValue);
})

app.get("/divide/*", (req, res) => {
    let myParams = req.params[0].split("/");
    console.log(myParams);
    let totalValue = myParams[0];
    for (i = 1; i < myParams.length; i++) {
        totalValue /= myParams[i];
    }
    res.send("The anwser is " + totalValue);
})

app.listen(PORT, () => {
    console.log("Andrew is triggering Port: " + PORT);
})