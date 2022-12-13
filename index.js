// import required modules
const express = require('express')
const app = express()




// define routes
app.get('/add/:x/:y', (req, res) => {
  console.log(req.params.x , req.params.y)
    res.send('The answer is:' + (parseInt(req.params.x) + parseInt(req.params.y)))
  
  });

  app.get('/subtract/:x/:y', (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    console.log(`x is ${x} and y is ${y}`)
    res.send(`The answer is ${x - y} `)
  });

  app.get('/multiply/:x/:y', (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    console.log(`x is ${x} and y is ${y}`)
    res.send(`The answer is ${x * y}`)
  });
  app.get('/divide/:x/:y', (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    console.log(`x is ${x} and y is ${y}`)
    res.send(`The answer is ${x / y}`)
  });




// listen on a port
app.listen(8000, () => {
    console.log(`listening to the smooth sounds of port ${8000} in the morning 🌊`)
  })

  /*
  
  app.get("/", function(res,res){
    res.setEncoding("Home page")
})
////Get localhost:8000/about => about route
app.get("/about", function(req,res){
    res.send("This is the about page")
})


////get route to localhost: 8000/greet/name
app.get("/greet/:name",function(req,res){
    res.send("Hello", "", + req.params.name + "!")
})


Your task is to create a webserver calculator using [Express](https://expressjs.com/) routes. Your calculator should handle **GET** (`app.get()`) requests to `/add`, `/subtract`, `/multiply` and `/divide`. You should use *URL parameters* to handle requests to your calculator.

Example using URL parameters:

route | response
------|---------|
`/add/:x/:y` | responds with x + y
`/subtract/:x/:y` | responds with x - y
`/multiply/:x/:y` | responds with x * y
`/divide/:x/:y` | responds with x / y

This is an example of a simple GET route with request parameters using express:

```javascript
app.get('/:input', (req, res) => {
  console.log("req.params: ", req.params)
  res.send("Our parameter is " + req.params.input + ".");
})
```
  
  
  */