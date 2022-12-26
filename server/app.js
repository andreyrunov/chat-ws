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

app.use(express.json())

require('dotenv').config()
const port = process.env.PORT

const rooms = new Map()

app.get('/rooms', (req, res) => {
	res.json(rooms)
})

app.post('/rooms', (req, res) => {
	const { roomId, userName } = req.body
	if (!rooms.has(roomId)) {
		rooms.set(
			roomId,
			new Map([
				['users', new Map()],
				['messages', []],
			])
		)
	}
	res.send()
})

io.on('connection', (socket) => {
	socket.on('ROOM:JOIN', ({ roomId, userName }) => {
		socket.join(roomId)
		rooms.get(roomId).get('users').socket(socket.id, userName)
		const users = rooms.get(roomId).get('users').values()
		socket.to(roomId).broadcast.emit('ROOM:JOIN', users)
	})

	console.log('user connected', socket.id)
})

server.listen(port, (err) => {
	if (err) {
		throw Error(err)
	}
	console.log('Сервер запущен на порту: ', port)
})
