export default function userReducer(
	state = {
		loginData: {}
	},
	action
) {
	switch (action.type) {
		case 'USER_DATA':
			return {
				...state,
				loginData: action.payload
			};
		default: {
		}
	}
	return state;
}
