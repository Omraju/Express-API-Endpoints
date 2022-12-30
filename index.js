const express = require('express')

const api = express()

const HOST = '0.0.0.0'
const PORT = 8888

api.get('/',(req,res) => {
    res.send("Welcome to this awesome api")
});


api.get('/people', (req,res) => {
    res.status(200).json(data)
})

api.listen(PORT, () => console.log(`API Running at ${HOST}:${PORT}!`));