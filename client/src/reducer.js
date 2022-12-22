export default (state, action) => {
	switch (action.type) {
		case 'JOINED':
			return {
				...state,
				roomId: action.payload.roomId,
				userName: action.payload.userName,
				joined: true,
			}
		default:
			return state
	}
}
