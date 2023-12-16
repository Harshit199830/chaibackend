const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('harshitgoswami')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login at chai or code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>youtube at chai or code</h2>')
})

app.get('/sendjson', (req, res) => {
    res.json({ user: "bhoot saare" })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})