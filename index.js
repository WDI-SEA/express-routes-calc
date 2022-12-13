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

			let result = c.add(...nums)
			res.send(`${result}`)
			break
		case 'subtract':
			res.send(`${arithmetic}`)
			// res.send(`${c.subtract(...args)}    `)
			break
		case 'multiply':
			res.send(`${arithmetic}`)
			// res.send(`${c.multiply(...args)}    `)
			break
		case 'divide':
			res.send(`${arithmetic}`)
			// res.send(`${c.divide(...args)}    `)
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
