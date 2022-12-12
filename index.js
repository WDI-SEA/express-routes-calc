const express = require('express')
const app = express()
const Calc = require('./Calc.js')

let c = new Calc()
console.log(c.add(1, 2, 3, 4, 5))
console.log(c.subtract(1, 2, 3, 4, 5))
console.log(c.multiply(1, 2, 3, 4, 5))
console.log(c.divide(1, 2, 3, 4, 5))

app.listen(3000, () => {
	console.log('listening for requests on localhost:3000')
})
