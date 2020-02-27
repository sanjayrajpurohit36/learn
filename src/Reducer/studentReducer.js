export default function(
	state = {
		studentData: {}
	},
	action
) {
	switch (action.type) {
		case 'STUDENT_DATA': {
			return {
				...state,
				studentData: action.payload
			};
		}
		default: {
		}
	}
	return state;
}
