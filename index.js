//import required modules
const express = require("express");
//configure express app
const app = express();

const add = require("./add.js");
const subtract = require("./subtract.js");
const divide = require("./divide.js");
const multiply = require("./multiply.js");
app.use(express.json());
//define routes
app.get("/", function (req, res) {
  res.send("hello world!");
});

app.get("/add/:num1/:num2/", function (req, res) {
  res.send(
    `${req.params.num1} + ${req.params.num2} = ${
      Number(req.params.num1) + Number(req.params.num2)
    }`
  );
  // console.log(req.params.num1);
  // console.log(req.params.num2);
  // let num1 = req.params.num1;
  // let num2 = req.params.num2;
  // res.send(`${add(Number(num1), Number(num2))}`);
});

app.get("/subtract/:num1/:num2/", function (req, res) {
  res.send(
    `${req.params.num1} - ${req.params.num2} = ${
      Number(req.params.num1) - Number(req.params.num2)
    }`
  );
  // console.log(req.params.num1);
  // console.log(req.params.num2);
  // let num1 = req.params.num1;
  // let num2 = req.params.num2;
  // res.send(`${subtract(Number(num1), Number(num2))}`);
});

app.get("/divide/:num1/:num2/", function (req, res) {
  res.send(
    `${req.params.num1} / ${req.params.num2} = ${
      Number(req.params.num1) / Number(req.params.num2)
    }`
  );
  // console.log(req.params.num1);
  // console.log(req.params.num2);
  // let num1 = req.params.num1;
  // let num2 = req.params.num2;
  // res.send(`${divide(Number(num1), Number(num2))}`);
});

app.get("/multiply/:num1/:num2/", function (req, res) {
  res.send(
    `${req.params.num1} * ${req.params.num2} = ${
      Number(req.params.num1) * Number(req.params.num2)
    }`
  );
  // console.log(req.params.num1);
  // console.log(req.params.num2);
  // let num1 = req.params.num1;
  // let num2 = req.params.num2;
  // res.send(`${multiply(Number(num1), Number(num2))}`);
});

app.get("/*", (req, res) => {
  console.log("req.query:", req.query);
  console.log("req.params:", req.params);
  const nums = req.params[0].split("/").map((string) => Number(string));
  let response = "";
  // console.log(nums);

  switch (req.query.math) {
    case "add":
      const sum = nums.reduce((total, current) => total + current);
      response += sum;
      break;
    case "subtract":
      const sub = nums.reduce((total, current) => total - current);
      response += sub;
      break;
    case "divide":
      const div = nums.reduce((total, current) => total / current);
      response += div;
      break;
    case "multiply":
      const mult = nums.reduce((total, current) => total * current);
      response += mult;
      break;
    default:
  }
  res.send(response);
});

//listen on a port
//listener = telling our server to listen for requests at a certain port
// 2 arguments = port number, callback function. (what to do when we get there)
app.listen(3000, () => {
  console.log(`Listening for requests on Port ` + 3000);
});
