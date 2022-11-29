const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { predict } = require('./aiModel')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/',(req,res) => {
    const moduleQuantity = req.body.mq_field 
    const systemSize = req.body.ss_field
    const inverterCapacity = req.body.inv_field

    pred = predict(moduleQuantity, systemSize, inverterCapacity)
    console.log(pred)
    res.status(200).json({
        status: 200,
        pred: pred
    });
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
