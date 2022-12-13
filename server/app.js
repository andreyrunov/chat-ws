const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

const rooms = new Map()

app.get('/rooms', (req, res) => {
    rooms.set('hello', '')
	res.json(rooms)
})

app.listen(port, (err) => {
    if(err) {
        throw Error(err)
    }
	console.log('Сервер запущен на порту: ', port)
})
