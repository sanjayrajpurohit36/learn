import axios from 'axios';
export function getAllStudentData(dispatch) {
	return axios.get('https://api.myjson.com/bins/1dlper').then(response => {
		console.log('response of all student dara', response);
		dispatch({
			type: 'STUDENT_DATA',
			payload: response
		});
	});
}
