const express = require ('express')
const app = express()
  const PORT = 8000

// app.get('/', (req,res) => {
//   res.send('im working')
// })

app.get("/add/:x/:y", (req, res) => {
    res.send("X + Y = " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

app.get("/sub/:x/:y", (req, res) => {
    res.send("X - Y = " + (parseInt(req.params.x) - parseInt(req.params.y)));
  });

app.get("/mult/:x/:y", (req, res) => {
    res.send("X * Y = " + (parseInt(req.params.x) * parseInt(req.params.y)));
  });

app.get("/div/:x/:y", (req, res) => {
    res.send("X / Y = " + (parseInt(req.params.x) / parseInt(req.params.y)));
  });







// listen
app.listen(PORT, ()=> {
  console.log(`listening ${PORT}`)
})
