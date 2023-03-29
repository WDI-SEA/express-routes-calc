const express = require('express')

const app = express()
const PORT = 3000

app.get('add/:x/:y', (req, res)=>{
    const add = parseInt(req.params.x) + parseInt(req.params.y)
    res.send(`${req.params.x} + ${req.params.y} = ${add}`)
})

app.get('/subtract/:x/:y', (req, res) =>{
    const sub =  parseInt(req.params.x) - parseInt(req.params.y)
    res.send(`${req.params.x} - ${req.params.y} = ${sub}`)
})

app.get('/multiply/:x/:y', (req, res)=>{
    const result = parseInt(req.params.x) * parseFloat(req.params.y)
    res.send(`${req.params.x} * ${req.params.y} = ${result}`)
})

app.get('/divide/:x/:y', (req, res) => {
  const div = parseInt(req.params.x) / parseInt(req.params.y)
  res.send(`${req.params.x} / ${req.params.y} = ${div}`)
})


//BONUS
app.get('/*', (req, res)=>{
    res.send(req.params)
    console.log(req.query)

    let numsArray = req.params["0"].split("/")
    console.log(numsArray)

    if(req.query.math === "add"){
        let result = 0
        for(num of numsArray){
            result += parseInt(num)
        }
        res.send(`The result is ${result}`)
    } else if(req.query.math === "subtract"){
        let result = numsArray[0]

        for(num of numsArray){
            result -= parseInt(num)
        }
        result += parseInt(numsArray[0])
        res.send(`The result is ${result}`)
    } else if(req.query.math === "multiply"){
        let result = 1
        
        for(num of numsArray){
            result *= parseInt(num)
        }
    res.send(`The result is ${result}`)
    } else if(req.query.math ==="divide"){
        let result = numsArray[0]

        for(num of numsArray){
            results /= parseInt(num)
        }
            result *= numsArray[0]
            res.send(`The result is ${result}`)
    } else{
        res.send(req.query)
    }
})

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})