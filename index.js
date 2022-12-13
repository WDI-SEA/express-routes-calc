const express = require("express")
const app = express()
const port = 2000

// Multiply function:  
app.get("/multiply/:x/:y", (req, res) => {
    res.send(`${req.params.x} times ${req.params.y} equals ` + (req.params.x * req.params.y))
  });
  
// Add function:
app.get("/add/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x)} plus ${parseInt(req.params.y)} equals ` + (parseInt(req.params.x) + parseInt(req.params.y)))
  });

// Subtract function:
app.get("/subtract/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x)} minus ${parseInt(req.params.y)} equals ` + (parseInt(req.params.x) - parseInt(req.params.y)))
  });

// Divide function:
app.get("/divide/:x/:y", (req, res) => {
    res.send(`${parseInt(req.params.x)} divided by ${parseInt(req.params.y)} equals ` + (parseInt(req.params.x) / parseInt(req.params.y)))
  });

// Bonus:

app.get("/*/", (req, res) => {
    let printout = '';
    for (let key in req.query) {
        printout += key + ": " + req.query[key] + "<br />";
    }
    res.send("Here's what they sent: <br /><br />" + printout);
  })

// Listener function:
app.listen(port, function() {
    console.log(`server is live on port ${port}, yasssss`)
})

