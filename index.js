// require packages
//configure our express app
//define routes for our express app
//listen on port

const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

  app.get("/add/:x/:y", (req, res) => {
    // console.log(req.params)
    // res.send('add route')
    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
  })

  app.get("/sub/:x/:y", (req, res) => {
    // console.log("req.params: ", req.params)
    // res.send('sub')
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
  })

  app.get("/mult/:x/:y", (req, res) => {
    //res.send('mult')
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
  })

  app.get("/div/:x/:y", (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
    // res.send('div')
  })

  app.get('/*', (req, res)=>{
    console.log('req.query', req.query)
    console.log('req.params', req.params)
    // break up url route params into an array
    const nums = req.params[0].split('/').map(string => Number(string))
    // console.log(nums)
    let response = ''
    switch(req.query.math) {
        case 'add':
            const sum = nums.reduce((total, current) => total + current)
            console.log(sum)
            nums.forEach((num, idx) => idx === nums.length -1 ? response += `${num} = ` : response += `${num} + `)
            response += sum
            break

        case 'sub':
            const diff = nums.reduce((total, current) => total - current)
            nums.forEach((num, idx) => idx === nums.length -1 ? response += `${num} = ` : response += `${num} - `)
            response += diff
            break

        case 'div':
            const div = nums.reduce((total, current) => total / current)
            nums.forEach((num, idx) => idx === nums.length -1 ? response += `${num} = ` : response += `${num} / `)
            response += div
            break

        case 'mult':
            const prod = nums.reduce((total, current) => total * current)
            nums.forEach((num, idx) => idx === nums.length -1 ? response += `${num} = ` : response += `${num} * `)
        response += prod
            break

        default:
            //bad math
            response = `bad math query string ${req.query.math}`
        
    }
    res.send(response)
  })

  app.listen(PORT, () => {
    console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`)
  })
