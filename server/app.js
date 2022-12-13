const express = require('express')
const socket = require('socket.io')
const app = express()
const server = require('http').Server(app) // создаем http сервер
const ws = socket(server)

require('dotenv').config()
const port = process.env.PORT

const rooms = new Map()

app.get('/rooms', (req, res) => {
	rooms.set('hello', '')
	res.json(rooms)
})

app.listen(port, (err) => {
	if (err) {
		throw Error(err)
	}
	console.log('Сервер запущен на порту: ', port)
})
