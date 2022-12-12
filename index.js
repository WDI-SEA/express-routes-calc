const express = require('express')
const app = express()
const Calc = require('./Calc.js')
// Calculator class with + - * / accepts any number of arguments
let c = new Calc()

app.get('/*', (req, res) => {
	const arithmetic = req.params[0]
	console.log(arithmetic)
	const args = []
	switch (arithmetic) {
		case 'add':
			res.send(`${arithmetic}`)
			// res.send(`${c.add(...args)}    `)
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
