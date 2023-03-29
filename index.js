const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/add/:x/:y", (req, res) => {
  res.send(
    "The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y))
  );
});

app.get("/subtract/:x/:y", (req, res) => {
  res.send(
    "The answer is: " + (parseInt(req.params.x) - parseInt(req.params.y))
  );
});

app.get("/multiply/:x/:y", (req, res) => {
  res.send("The answer is: " + parseInt(req.params.x) * parseInt(req.params.y));
});

app.get("/divide/:x/:y", (req, res) => {
  res.send("The answer is: " + parseInt(req.params.x) / parseInt(req.params.y));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// BONUS

// Big mistake with Number(VS Code corrected me) but cool

app.get("/*", (req, res) => {
  const nums = req.params[0].split("/").map(Number);

  let result;
  if (req.query.math === "add") {
    result = nums.reduce((total, num) => total + num, 0);
  } else if (req.query.math === "subtract") {
    result = nums.reduce((total, num) => total - num);
  } else if (req.query.math === "multiply") {
    result = nums.reduce((total, num) => total * num);
  } else if (req.query.math === "divide") {
    result = nums.reduce((total, num) => total / num);
  } else res.send("not cool, man");
  res.send(result.toString());
});
