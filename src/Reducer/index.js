import { combineReducers } from 'redux';
import login from './userReducer';
import student from './studentReducer';
const appReducer = combineReducers({
	login,
	student
});

const rootReducer = (state, action) => {
	console.log('login in userReducer', login);
	console.log('student data in root reducer', student);
	return appReducer(state, action);
};

export default rootReducer;
