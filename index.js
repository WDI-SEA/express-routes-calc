const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("sup");
});

app.get("/add/:x/:y", (req, res) => {
  res.send("your total: " + (parseInt(req.params.x) + parseInt(req.params.y)));
});

app.get("/subtract/:x/:y", (req, res) => {
  res.send("your total: " + (parseInt(req.params.x) - parseInt(req.params.y)));
});

app.get("/multiply/:x/:y", (req, res) => {
  res.send("your total: " + parseInt(req.params.x) * parseInt(req.params.y));
});

app.get("/divide/:x/:y", (req, res) => {
  res.send("your total: " + parseInt(req.params.x) / parseInt(req.params.y));
});

app.get("/*", (req, res) => {
  let parameters = req.params[0].split("/");
  if (req.query.math === "add") {
    let answer = parameters.reduce((total, num) => {
      return total + parseInt(num);
    }, 0);
    res.send("Your answer: " + answer);
  } else if (req.query.math === "subtract") {
    let answer = parameters.reduce((total, num) => {
      return total - parseInt(num);
    });
    res.send("Your answer: " + answer);
  } else if (req.query.math === "multiply") {
    let answer = parameters.reduce((total, num) => {
      return total * parseInt(num);
    });
    res.send("Your answer: " + answer);
  } else if (req.query.math === "divide") {
    let answer = parameters.reduce((total, num) => {
      return total / parseInt(num);
    });
    res.send("Your answer: " + answer);
  } else {
    res.send("that ain't math I know how to do, bucko");
  }
});

app.listen(8000, () => {
  console.log("hiya");
});
