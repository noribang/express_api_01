// Require express module.
const express = require('express')
// Create instance of express application.
const app = express()
// Route '/'.
// GET request.
app.get('/', (req, res) => {
    res.send('Hello world')
})

// Server listen.
app.listen(4000)