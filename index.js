const express = require('express')
const app = express()
let bodyParser = require('body-parser')

const Calc = require('./Calc.js')
// Calculator class with + - * / accepts any number of arguments
let c = new Calc()
// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTES
app.get('/*', (req, res) => {
	const arithmetic = req.params[0]
	let args = Object.keys(req.query)
	console.log(args.join(','))
	let nums = []
	args[0].split(',').forEach((i) => nums.push(Number(i)))
	console.log(nums)

	// console.log(args)
	switch (arithmetic) {
		case 'add':
			// res.send(`${arithmetic}`)

			let addResult = c.add(...nums)
			res.send(`${addResult}`)
			break
		case 'subtract':
			let subtractResult = c.subtract(...nums)
			res.send(`${subtractResult}`)
			break
		case 'multiply':
			let multiplyResult = c.multiply(...nums)
			res.send(`${multiplyResult}`)
			break
		case 'divide':
			let divideResult = c.divide(...nums)
			res.send(`${divideResult}`)
			break
	}
})

app.listen(3000, () => {
	console.log('listening for requests on localhost:3000')
})

// console.log(c.add(1, 2, 3, 4, 5))
// console.log(c.subtract(1, 2, 3, 4, 5))
// console.log(c.multiply(1, 2, 3, 4, 5))
// console.log(c.divide(1, 2, 3, 4, 5))
