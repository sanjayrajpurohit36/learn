import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducer/index';
const loggerMiddleware = createLogger({});
export default function configureStore(initialState = {}) {
	console.log('inside store');
	return createStore(rootReducer, initialState, applyMiddleware(thunk, loggerMiddleware));
}
