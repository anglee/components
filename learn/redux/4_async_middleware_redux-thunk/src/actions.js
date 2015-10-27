/*
 * action types
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

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

export const ASYNC_INCREMENT_ISSUED = 'ASYNC_INCREMENT_ISSUED';
function asyncIncrementIssued() {
	return {
		type: ASYNC_INCREMENT_ISSUED,
	};
}

export const ASYNC_INCREMENT_EXECUTE = 'ASYNC_INCREMENT_EXECUTE';
function asyncIncrementExecute(amount) {
	return {
		type: ASYNC_INCREMENT_EXECUTE,
		amount
	};
}

export function asyncIncrement(amount) {
	return function (dispatch) {
		setTimeout(() => {
			console.log("test");
			dispatch(asyncIncrementExecute(amount));
		}, 700);

		dispatch(asyncIncrementIssued(amount));
	};

}
