import React from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8000')

function App() {
	return <div className='App'>Hello!</div>
}

export default App
