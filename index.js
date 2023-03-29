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



app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})