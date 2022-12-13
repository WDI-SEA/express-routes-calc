// require packages
const express = require('express')

// configure our express app
const app = express()
const PORT = 3000

// define routes for our express app
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Calculator API</h1>')
})

// !!!computer goes through code chronologically


// GET /add/:x/:y
app.get('/add/:x/:y', (req, res) => {
    console.log(req.params)
    console.log(Number(req.params.x) + Number(req.params.y))

    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x)} + ${Number(req.params.y)}`)
})
// GET /sub/:x/:y
app.get('/sub/:x/:y', (req, res) => {
    req.send('sub')
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x)} - ${Number(req.params.y)}`)
})

// GET /mult/:x/:y
app.get('/mult/:x/:y', (req, res) => {
    res.send('mult')
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x)} * ${Number(req.params.y)}`)

})

// GET /div/:x/:y
app.get('/div/:x/:y', (req, res) => {
    res.send('div')
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x)} / ${Number(req.params.y)}`)
})

app.get('/*', (req,res) => {
    console.log('req.query:', req.query)
    console.log('req.params:', req.params)
    // break up url route params into an array
    const nums = req.params[0].split('/').map(string => Number(string))
    //console.log(nums)
    let response = ''
    switch(req.query.math) {
        case 'add':
            const sum = nums.reduce((total, current) => total + current)
            console.log(sum)
            const niceStringa = nums.forEach((num, idx) => idx === nums.length -1 ? response += `{num} = ` : response += `${num} + `)
            response += sum
            break
        case 'sub':
            const diff = nums.reduce((total,current) => total - current)
             const niceStrings = nums.forEach((num, idx) => idx === nums.length -1 ? response += `{num} = ` : response += `${num} - `)
            response += diff
            break
        case 'mult':
            const prod = nums.reduce ((total, current) => total * current)
            const niceStringm = nums.forEach((num, idx) => idx === nums.length -1 ? response += `{num} = ` : response += `${num} * `)
            response += prod
            break    
        case 'div':
            const div = nums.reduce((total, current) => total / current)
            const niceStringd = nums.forEach((num, idx) => idx === nums.length -1 ? response += `{num} = ` : response += `${num} / `)
            response += div
            break
        default:
            //bad math
    }
    res.send('bonus route')
})


// listen on port
app.listen(PORT, () => {
    console.log(`you are listening to the smooth sounds of port ${PORT} in morning`)
})

