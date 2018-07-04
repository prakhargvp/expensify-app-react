import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
	switch(action.type){
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return { count: state.count + incrementBy};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return { count: state.count - decrementBy };
		case 'SET':
			const count = typeof action.count === 'number' ? action.count : 1;
			return { count: count};
		case 'RESET':
			return { count: 0 };
		default:
			return state;
	}
});


const unsubscribe = store.subscribe(() => {
	// call everytime when data changes
	console.log(store.getState());
});

store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});


store.dispatch({
	type: 'RESET'
});

store.dispatch({
	type: 'DECREMENT',
	decrementBy: 2
});

store.dispatch({
	type: 'SET',
	count: 2
});
