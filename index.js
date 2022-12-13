const express = require('express')
const app = express()

// app.get('/add/:x/:y',function(req, res){
// res.send('Sum of the two is: ' + (parseInt(req.params.x)+parseInt(req.params.y)))
// })
// app.get('/subtract/:x/:y',function(req, res){
// res.send('Difference of the two is: ' + (parseInt(req.params.x)-parseInt(req.params.y)))
// })
// app.get('/multiply/:x/:y',function(req, res){
// res.send('Product of the two is: ' + (parseInt(req.params.x)*parseInt(req.params.y)))
// })
// app.get('/divide/:x/:y',function(req, res){
// res.send('Quotient of the two is: ' + (parseInt(req.params.x)/parseInt(req.params.y)))
// })

app.get('/*:?math=:operation',function(req,res){
//the input doesn't work if you add in the ?
//input accepts localhost:8000/5/6/7/8/math=add but not localhost:8000/5/6/7/8?math=add
    let nums = req.params[0].split("/")
    let newNums = []
    for(let i in nums){
        if(isNaN(parseInt(nums[i])) == false){
            newNums[i] = parseInt(nums[i])
        }
    }
    nums = newNums[0]
    for(let i =1; i <newNums.length; i++){
        if(req.params.operation == 'add') {
            nums+= newNums[i]
        }
        else if(req.params.operation == 'subtract'){
            nums-=newNums[i]
        }   
        else if(req.params.operation == 'multiply'){
            nums*=newNums[i]
        }
        else if(req.params.operation == 'divide'){
            nums=newNums[i]
        }

    }
    res.send(nums.toString())

    //res.send(req.params[0])
    // if(req.params.operation == 'add') res.send('Sum is: ' + (parseInt(req.params.x)+parseInt(req.params.y)))

    // if(req.params.operation == 'subtract')res.send('Difference is: ' + (parseInt(req.params.x)-parseInt(req.params.y)))

    // if(req.params.operation == 'multiply')res.send('Product of the two is: ' + (parseInt(req.params.x)*parseInt(req.params.y)))

    // if(req.params.operation == 'divide')res.send('Quotient of the two is: ' + (parseInt(req.params.x)/parseInt(req.params.y)))
})




app.listen(8000, function(){
    console.log('running server')
})