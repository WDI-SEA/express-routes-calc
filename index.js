const express = require("express")
const add = express()

add.get("/", (req, res) => {
    res.send("This is the landing")
})

add.get("/add/:x/:y", (req, res) => {
    res.send(`${req.params.x} + ${req.params.y} =`+ " " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

add.get("/subtract/:x/:y", (req, res) => {
    res.send(`${req.params.x} - ${req.params.y} =` + " " + (parseInt(req.params.x) - parseInt(req.params.y)));
  });


add.get("/multiply/:x/:y", (req, res) => {
    res.send(`${req.params.x} * ${req.params.y} =` + " " + (parseInt(req.params.x) * parseInt(req.params.y)));
  });

add.get("/divide/:x/:y", (req, res) => {
    res.send(`${req.params.x} / ${req.params.y} =` + " " + (parseInt(req.params.x) / parseInt(req.params.y)));
  });

add.get('/*', (req, res) => {
    const numbers = req.path.split('/').slice(1).map(num => parseInt(num))
    const operation = req.query.math;


    let result;
    switch (operation) {
        case 'add':
            result = numbers.reduce((a, b) => a + b, 0);
            break;
        case 'subtract':
            result = numbers.slice(1).reduce((a, b) => a - b, numbers[0]);
            break;
        case 'multiply':
            result = numbers.reduce((a, b) => a * b, 1);
            break;
        case 'divide':
            result = numbers.slice(1).reduce((a, b) => a / b, numbers[0]);
            break;
        default:
            return res.status(400).send('Invalid operation. Please use add, subtract, multiply, or divide.');
    }

    res.send(`The result is ${result}`);

})




add.listen(8000)