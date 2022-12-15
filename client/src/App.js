import React, { useReducer } from 'react'
import reducer from './reducer'
import JoinBlock from './components/JoinBlock'

function App() {
	const [state, dispatch] = useReducer(reducer, {
		isAuth: false,
	})

	const onLogin = () => {
		
		dispatch({
			type: 'IS_AUTH',
			payload: true
		})
	}

	return (
		<div className='wrapper'>
			<JoinBlock onLogin={onLogin} />
		</div>
	)
}

export default App
