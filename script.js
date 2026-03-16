const express = require('express')
const app = express()

const prompts = require('./prompts.json')

console.log("----------------------------------------------------")


const randomValue = Math.floor(Math.random() * 501);


app.get('/', (req, res) => {
    res.send("all ok bro!");
    res.end()
})

app.get('/api/random', (req, res) => {
    res.json({
        prompt: prompts[randomValue]
    })
})

app.get('/api/:id', (req, res) => {
    const {id}  = req.params
    res.json({
        prompt: prompts[id]
    })
})

app.listen(3000, () => {
    console.log('Listening at : localhost:3000')
})