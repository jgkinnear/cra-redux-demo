import { combineReducers } from 'redux'

const initialState = {
	items: {
		1: {id: 1, name: 'Jason',},
		2: {id: 2, name: 'Greg'},
		3: {id: 3, name: 'Potarto'},
		4: {id: 4, name: 'Carret'},
		5: {id: 5, name: 'Owlive', done: true,},
	},
	active: [1, 2, 5],
};

const todoItemReducer = (state = initialState, action) => {
	return state;
};


const rootReducer = combineReducers({

	todoItems: todoItemReducer

});

export default rootReducer