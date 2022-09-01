// import required modules
const express = require('express')

// create an instance of the express app
const app = express()
const PORT = 8080

// define some routes 
app.get('/add/:x/:y', (req, res) => {
    console.log(req.params)
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.send(`${x + y}`)
})

app.get('/subtract/:x/:y', (req, res) => {
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    res.send(`${x - y}`)
})

app.get('/multiply/:x/:y', (req, res) => {
    res.send(`${Number(req.params.x) * Number(req.params.y)}`)
})

app.get('/divide/:x/:y', (req, res) => {
    res.send(`${Number(req.params.x) / Number(req.params.y)}`)
})

// BONUS
// less specific routes
// 1 + 2 + 3 + 4 + 5 + 6 = 
app.get('/*', (req, res) => {
    let str = ''
    const math = req.query.math
    const nums = req.params[0].split('/')
    if (math === 'add') {
        // do add math
        const sum = nums.reduce((total, current) => {
            return Number(total) + Number(current)
        })

        nums.forEach((num, idx) => {
            // if this is the last index, do not add a +
            if (idx != nums.length - 1) {
                str += ` ${num} +`
            } else {
                str += ` ${num}`
            }
        })
        res.send(` ${str} = ${sum}`)

    } else if (math === 'sub') {
        // subtract
        const diff = nums.reduce((total, current) => {
            return Number(total) - Number(current)
        })

        nums.forEach((num, idx) => {
            // if this is the last index, do not add a -
            if (idx != nums.length - 1) {
                str += ` ${num} -`
            } else {
                str += ` ${num}`
            }
        })
        res.send(` ${str} = ${diff}`)
    } else if (math === 'mult') {
            // mult
            const prod = nums.reduce((total, current) => {
                return Number(total) * Number(current)
            })

            nums.forEach((num, idx) => {
                // if this is the last index, do not add a *
                if (idx != nums.length - 1) {
                    str += ` ${num} *`
                } else {
                    str += ` ${num}`
                }
            })
            res.send(` ${str} = ${prod}`)
    } else if (math === 'div') {
        // divide
        const div = nums.reduce((total, current) => {
            return Number(total) * Number(current)
        })

        nums.forEach((num, idx) => {
            // if this is the last index, do not add a /
            if (idx != nums.length - 1) {
                str += ` ${num} /`
            } else {
                str += ` ${num}`
            }
        })
        res.send(` ${str} = ${div}`)
    } else {
        // handle a bad query string
        res.send(`I have never heard of a math called ${math}`)
    }
    // console.log(req.params[0].split('/'))
    // console.log(req.query)
    // res.send('* route')
})

// listen on a port
app.listen(PORT, () => {
    console.log(`listening to the smoooooth sounds of port ${PORT} in the morning 🌊`)
})