const express = require('express')

const app =  new express()

const PORT = 4000

// addition
// /5/6/7/8?math=add

// make one then add if conditions in it to specifiy the type of math

app.get('*', (req, res) => {
    console.log('query',req.query) //query { math: 'add' }
    console.log('params',req.params) //params { '0': '/5/6/7/8' }

    console.log(req.query.math)

    let myParams = req.params[0].split("/");
    
    myParams.shift()

    // To find the addition
    if(req.query.math === 'add'){

        let result = myParams.reduce((total, num) => {
            return total + parseInt(num)
        }, 0);
        res.send(`<h1>The addition is ${result}</h1>`);

    // To find the subtraction
    } else if(req.query.math === 'subtract') {

        let result = myParams.reduce((total, num) => {
            return total - parseInt(num)
        });
        res.send(`<h1>The subtraction is ${result}</h1>`);

    // To find the multiplication
    } else if(req.query.math === 'multiply') {

        let result = myParams.reduce((total, num) => {
            return total * parseInt(num)
        });
        res.send(`<h1>The multiplication is ${result}</h1>`);
    
    // To find the division
    } else if(req.query.math === 'divide') {

        let result = myParams.reduce((total, num) => {
            return total / parseInt(num)
        });
        res.send(`<h1>The division is ${result}</h1>`);

    } else {
        res.send(`<h1>Invalid Request</h1>`);
    }
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})