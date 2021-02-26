const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/testing', (req, res) => {
    res.json({hello: true})
})

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})