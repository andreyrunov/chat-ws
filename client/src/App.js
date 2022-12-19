import React, { useReducer } from 'react'
import socket from './socket';

import reducer from './IsAuthReducer'
import JoinBlock from './components/JoinBlock'

function App() {
	const [state, dispatch] = useReducer(reducer, {
		joined: false,
	})

	const onLogin = () => {
		console.log(123)
		dispatch({
			type: 'JOINED',
			payload: true
		})
	}
	console.log(state.isAuth)
	return (
		<div className='wrapper'>
			{!state.isAuth && <JoinBlock onLogin={onLogin} />}
		</div>
	)
}

export default App
