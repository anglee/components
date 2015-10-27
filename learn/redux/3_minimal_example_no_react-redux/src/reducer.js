import { INCREMENT, DECREMENT } from './actions';

const initialState = {
	count: 0
};

export function reducer(state, action) {

	let resultState;

	if (typeof state === 'undefined') {
		state = initialState;
	}

	switch (action.type) {
		case INCREMENT:
			resultState = {
				count: state.count + action.amount
			};
			break;
		case DECREMENT:
			resultState = {
				count: state.count - action.amount
			};
			break;
		default:
			resultState = state;
	}
	return resultState;
}
