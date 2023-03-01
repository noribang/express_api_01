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
app.get('/animal/:name/:color', (req, res) => {
    let animal = req.params.name
    let color = req.params.color
    console.log(animal, " ", color)
    res.send("Hello " + animal + color)
})


// Server listen.
app.listen(4000)