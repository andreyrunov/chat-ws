import React, { useState } from 'react'
import axios from 'axios'


export default function JoinBlock({ onLogin }) {
	const [roomId, setRoomId] = useState('')
	const [userName, setUserName] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const onEnter = async () => {
		if (!roomId || !userName) {
			return alert('Неверные данные!')
		}
		setIsLoading(true)
		await axios
			.post('/rooms', {
				roomId,
				userName,
			})
			onLogin()
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
			<button disabled={isLoading} onClick={onEnter} className='btn btn-success'>
				{isLoading ? "ВХОД..." : "ВОЙТИ" }
			</button>
		</div>
	)
}
