// Import expess module.
const express = require('express')
// Created express instance.
const app = express()

// Create route '/'. 
// Create GET request and respond with simple string message to browser.
app.get('/', (req, res) => {
    res.send("Hello world.")
})

// LIsten localhost 4000
app.listen(4000)



