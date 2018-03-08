import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const OPTIONS = {
	name: 'TOPBETTA',
	actionCreators: {
	},
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(OPTIONS)
	: compose;

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(applyMiddleware(ReduxThunk)),
	)
}