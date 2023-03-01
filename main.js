// Require express module.
const express = require('express')
// Create instance of express application.
const app = express()

// Route '/'.
// GET request.
app.get('/', (req, res) => {
    res.send('Hello world')
})
// Route '/animal/:name'
// GET request.
app.get('/animal/:name', (req, res) => {
    let animal = req.params.name
    console.log(animal)
    res.send("Hello " + animal)
})


// Server listen.
app.listen(4000)