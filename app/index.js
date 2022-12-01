const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const spawn = require('child_process').spawn;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))




app.use(express.static('./static'))

app.post('/',(req,res) => {
    let values = req.body
    values = values.join()
    console.log(values)
  

     // luodaan subprosessi
     const python = spawn('python3', ['predict.py', values]);
     
     // skriptin output 
     python.stdout.on('data', function (data) {
         pred = data.toString()
         
     })
      
     // suljetaan prosessi
     python.on('close', (code) => {
         console.log(`Python script executed with code: ${code}`);

    res.status(200).json({
        status: 200,
        pred: pred
        
    })
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
