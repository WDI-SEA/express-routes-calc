const express = require('express')
const app = express()
const PORT = 3000

// app.get('/add/*', (req, res) => {
//     let nums = req.params[0].split('/');
//     let result = nums.reduce((total, num) => {
//         return total + parseInt(num)
//     }, 0)
//     res.send('the answer is ' + result)
// })


// Number() around the whole of reqx and reqy
app.get('/add/:x/:y', (req, res) => {
    res.send(`${req.params.x} + ${req.params.y} = ${Number(req.params.x) + Number(req.params.y)}`)
})

app.get('/sub/:x/:y', (req, res) => {
    res.send(`${req.params.x} - ${req.params.y} = ${Number(req.params.x) - Number(req.params.y)}`)
})

app.get('/mult/:x/:y', (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} = ${Number(req.params.x) * Number(req.params.y)}`)
})

app.get('/div/:x/:y', (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} = ${Number(req.params.x) / Number(req.params.y)}`)
})

app.get('/*', (req, res) => {
    //break up url route params into an array
    const nums = req.params[0].split('/').map(string => Number(string))
    let response = ''
    switch(req.query.math) {
        case 'add':
            const sum = nums.reduce((total, current) => total + current)
            response += sum
            break
        case 'sub':
            const diff = nums.reduce((total, current) => total - current)
            response += diff
            break
        case 'div':
            const div = nums.reduce((total, current) => total / current)
            response += div
            break
        case 'mult':
            const prod = nums.reduce((total, current) => total * current)
            response += prod
            break
        default:
            response = `bad math query string: ${req.query.math}`
            // bad math
    }
    res.send(response)
})

app.listen(PORT, () => {
    console.log('sdf')
})