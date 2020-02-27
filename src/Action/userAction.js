export function loginUserAction(data) {
	console.log('consoling the data in action', data);
	return function(dispatch) {
		dispatch({
			type: 'USER_DATA',
			payload: data
		});
	};
}
