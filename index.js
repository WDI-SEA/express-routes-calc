const express = require('express');
const app = express();


app.get('/add/:x/:y', (req, res) => {
    res.send("Answer = " + (parseInt(req.params.x) + parseInt(req.params.y)))    
})
app.get('/subtract/:x/:y', (req, res) => {
    res.send("Answer = " + (req.params.x - req.params.y))
})
app.get('/multiply/:x/:y', (req, res) => {
    res.send("Answer = " + (req.params.x * req.params.y))
})
app.get('/divide/:x/:y', (req, res) => {
    res.send("Answer = " + (req.params.x / req.params.y))
})

// bonus
app.get("/*", (req, res) => {
    let arr = []
    numbers = req.params[0].split('/')
    arr = numbers.map(x => parseInt(x))
    let answer = arr[0]
    

    if (req.query.math==="add"){
        console.log('hi')
        for(let i = 1; i <arr.length; i++){
            answer += arr[i]
        }
    }
    if(req.query.math==="subtract"){
        for(let i=1; i<arr.length; i++){
            answer -= arr[i]
        }
    }
    if(req.query.math==="multiply"){
        for(let i=1; i<arr.length; i++){
            answer *= arr[i]
        }
    }
    if(req.query.math==="divide"){
        for(let i=1; i<arr.length; i++){
            answer /= arr[i]
        }
    }

    res.send([answer])
})


app.listen(9000, function() {
    console.log('server is live')
})



