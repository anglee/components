import { INCREMENT, DECREMENT, ASYNC_INCREMENT_ISSUED, ASYNC_INCREMENT_EXECUTE } from './actions';

const initialState = {
	count: 0
};

export function theReducer(state, action) {

	let resultState;

	if (typeof state === 'undefined') {
		state = initialState;
	}

	switch (action.type) {
		case INCREMENT:
			resultState = {
				count: state.count + action.amount,
				status: ""
			};
			break;
		case DECREMENT:
			resultState = {
				count: state.count - action.amount,
				status: ""
			};
			break;
		case ASYNC_INCREMENT_ISSUED:
			resultState = {
				count: state.count,
				status: "wait ..."
			};
			break;
		case ASYNC_INCREMENT_EXECUTE:
			resultState = {
				count: state.count + action.amount,
				status: ""
			};
			break;
		default:
			resultState = state;
	}
	return resultState;
}
