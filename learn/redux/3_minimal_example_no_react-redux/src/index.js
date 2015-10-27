import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { reducer } from './reducer';

let store = createStore(reducer);

// Log the initial state
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
	console.log("dispatch", store.getState())
});

ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
);
