import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ConnectedApp from './App';
import { myApp } from './reducer';

let store = createStore(myApp);

// Log the initial state
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
	console.log("dispatch", store.getState())
});

ReactDOM.render(
		<ConnectedApp store={store} />,
		document.getElementById('root')
);
