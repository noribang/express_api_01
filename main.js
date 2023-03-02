// Require express module.
const express = require('express')
// Create instance of express application.
const app = express()

// Middleware
// Receive and parse incoming json.
app.use(express.json())

// Route '/'.
// GET request.
app.get('/', (req, res) => {
    res.send('Hello world')
})
// Route '/animal/:name'
// GET request.
// app.get('/animal/:name/:color', (req, res) => {
//     let animal = req.params.name
//     let color = req.params.color
//     console.log(animal, " ", color)
//     res.send("Hello " + animal + color)
// })

// Route with parameters.
app.get("/api/animal/:name", (req, res) => {
    if (req.params.name === "meowsalot") {
      res.json({ name: "Meowsalot", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg", bio: "This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque." })
    } else if (req.params.name === "barksalot") {
      res.json({ name: "Barksalot", species: "dog", "photo": "https://learnwebcode.github.io/json-example/images/dog-1.jpg", bio: "This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit." })
    } else if (req.params.name === "purrsloud") {
      res.json({ name: "Purrsloud", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg", bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum." })
    } else {
      res.json("Animal not found.")
    }
  })
// Route with query string.
app.get('/fake-search', (req, res) => {
    console.log(req.query)
    res.json("thank you for your request.")
})


// Server listen.
app.listen(4000)