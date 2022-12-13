const express = require('express')

const app = express()
const PORT = 3000


app.get('/', (req, res) => {
    res.send('Main page connected')
});

app.get('/add/:x/:y', (req, res) => {
    res.send('Result: ' + (parseInt(req.params.x) + parseInt(req.params.y)))
}); 
    
app.get('/subtract/:x/:y', (req, res) => {
    res.send('Result: ' + (parseInt(req.params.x) - parseInt(req.params.y)))
}); 
    
app.get('/multiply/:x/:y', (req, res) => {
    res.send('Result: ' + (parseInt(req.params.x) * parseInt(req.params.y)))
}); 
    
app.get('/divide/:x/:y', (req, res) => {
    res.send('Result: ' + (parseInt(req.params.x) / parseInt(req.params.y)))
}); 
    
app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})

app.get("/add/*", (req, res) => {
    let myParams = req.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return total + (parseInt(num))
    }, 0);
    res.send("The answer is  " + result);
});