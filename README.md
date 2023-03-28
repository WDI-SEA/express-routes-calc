# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Express Routes Calculator 🧮

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

## Getting Started

* fork and clone this repo and then cd in into express-routes-calc
* run `npm init` to initialize a node project
* run `npm i express` to install the required packages
* `touch index.js` to create the main entry point for your express app
* git ignore your node modules
* use `nodemon` to run your express app

Before writing your routes, set up a simple express app with a `hello world` route to test that everything is working.

<details>

<summary> HELP! I'm stuck setting up an express app! </summary>

Check out this pseudocode, it might help:

```javascript
// import required modules

// configure express app

// define routes

// listen on a port
```
</details>

<details>

<summary> Stop Messing Around! I'm really stuck!! </summary>

This is an example of the most simple express server:

```javascript
// import required modules
const express = require('express')

// configure express app
const app = express()
const PORT = 3000

// define routes
app.get('/', (req, res) => {
  res.send('Hello, World!')
});

// listen on a port
app.listen(PORT, () => {
  console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`)
})
```
</details>

## Bonus

Make it so your calculator can accept any amount of numbers to do math with instead of just 2 hardcoded ones with the wildcard `*` route variable. Instead if having the the math operation as the first route parameter, send it in the query params, so one route can handle addition, subtraction, multiplication, and division. 

For example the URL `/5/6/7/8?math=add` would respond with `26` and the URL `5/6/7/8?math=subtract` would respond with `-16`. Likewise `5/6/7/8/9/10?math=add` should respond with `45` and so on. 

Use this example at `/*` to experiment with how this might work:

```javascript
app.get("/*", (req, res) => {
  console.log(req.params)
  res.send(req.params)
})
```

Follow along with the [gitbook notes](https://gawdiseattle.gitbook.io/wdi/05-node-express/00readme-1/02routes#2nd-express-app-fun-with-routes) on express routing for some tips and tricks.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
