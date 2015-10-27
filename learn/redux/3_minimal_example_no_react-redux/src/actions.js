/*
 * action types
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/*
 * action creators
 */

export function increment(amount) {
	return {
		type: INCREMENT,
		amount
	};
}

export function decrement(amount) {
	return {
		type: DECREMENT,
		amount
	};
}
