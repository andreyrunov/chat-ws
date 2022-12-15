import React, { useState } from 'react'
import axios from 'axios'


export default function JoinBlock({ onLogin }) {
	const [roomId, setRoomId] = useState('')
	const [userName, setUserName] = useState('')

	const onEnter = () => {
		if (!roomId || !userName) {
			return alert('Неверные данные!')
		}
		axios
			.post('/rooms', {
				roomId,
				userName,
			})
			.then(onLogin)
	}

	return (
		<div className='join-block'>
			<input
				type='text'
				placeholder='Room ID'
				value={roomId}
				onChange={(e) => setRoomId(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Ваше имя'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button onClick={onEnter} className='btn btn-success'>
				Войти
			</button>
		</div>
	)
}
