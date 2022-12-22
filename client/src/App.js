import React, { useReducer } from 'react'
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
		console.log(obj)
		dispatch({
			type: 'JOINED',
			payload: obj,
		})
		socket.emit('ROOM:JOIN', obj)
	}
	console.log(state, '<<<<<<<<<<<------------ тут')
	return (
		<div className='wrapper'>
			{!state.joined && <JoinBlock onLogin={onLogin} />}
		</div>
	)
}

export default App
