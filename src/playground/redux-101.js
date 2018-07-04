import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ( { count = 1 } = {} ) => ({
	type: 'SET',
	count: count
});

const resetCount = () => ({
	type: 'RESET'
});


// Reduce
// 1. Reducers are Pure Function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
	switch(action.type){
		case 'INCREMENT':
			return { count: state.count + action.incrementBy};
		case 'DECREMENT':
			return { count: state.count - action.decrementBy };
		case 'SET':
			return { count: action.count};
		case 'RESET':
			return { count: 0 };
		default:
			return state;
	}
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
	// call everytime when data changes
	console.log(store.getState());
});


// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 3 }));