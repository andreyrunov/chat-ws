const express = require('express')
const app = express()

const server = require('http').Server(app) // создаем http сервер
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000', 
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: true,
	},
})

require('dotenv').config()
const port = process.env.PORT

const rooms = new Map()

app.get('/rooms', (req, res) => {
	rooms.set('hello', '')
	res.json(rooms)
})

io.on('connection', (socket) => {
	console.log('user connected', socket.id)
})

server.listen(port, (err) => {
	if (err) {
		throw Error(err)
	}
	console.log('Сервер запущен на порту: ', port)
})
