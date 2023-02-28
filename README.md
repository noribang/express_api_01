# express_api_01

## Installation
Create new project directory.
```bash
mkdir new_express_project
```
Start new node express project.
```bash
npm init -y
```
Install express server.
```bash
npm install express
```
Create file to write express server code in.
```bash
touch main.js
```

## Local server
Start local server.
```bash
node <file_name>
e.g.
node main.js
```
Stop local server.
```bash
ctrl + c
```
Install nodemon. Allows you to not have to keep stopping and re-starting server after every change to files.  
```bash
npx nodemon <file_name>
e.g.
npx nodemon main.js
```


## Usage
In main.js file:
```javascript

const express = require('express')
const app = express()

// Create route '/'.
// Create GET request response for route '/'.
app.get('/', (req, res) => {
    res.send("Welcome to the home page.")
})

// Create route '/'
// Create GET request response
app.get('/about', (req, res) => {
    res.send("Thanks for learning more about us.")
})

app.listen(3000)

```