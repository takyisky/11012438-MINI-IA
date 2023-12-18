const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Main page')
})

// Endpoint to register patients
app.post('/patients', (req, res) => {
    // Implementation to register patients


  });

app.listen(port, () => {
  console.log(`Your App would run on port ${port}`)
})

mongoose.connect ('mongodb://localhost:27017')