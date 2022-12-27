import React, { useEffect, useReducer } from 'react'
import socket from './socket';

import reducer from './reducer'
import JoinBlock from './components/JoinBlock'

function App() {
	const [state, dispatch] = useReducer(reducer, {
		roomId: null,
		userName: null,
		joined: false,
	})

	const onLogin = (obj) => {
		dispatch({
			type: 'JOINED',
			payload: obj,
		})
		socket.emit('ROOM:JOIN', obj)
	}

	useEffect(() => {
		socket.on('ROOM:JOIN', (users) => {
			console.log('новый пользователь', users)
		})
	}, [])
	
	window.socket = socket

	return (
		<div className='wrapper'>
			{!state.joined && <JoinBlock onLogin={onLogin} />}
		</div>
	)
}

export default App
