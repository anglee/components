import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = 0;

export default function counter(state, action) {
	if (typeof state === 'undefined') {
		state = initialState;
	}
	switch (action.type) {
		case INCREMENT_COUNTER:
			return state + 1;
		case DECREMENT_COUNTER:
			return state - 1;
		default:
			return state;
	}
}