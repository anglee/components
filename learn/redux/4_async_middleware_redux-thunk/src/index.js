import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { theReducer } from './reducer';
import thunk from 'redux-thunk';


// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
		thunk
)(createStore);

const store = createStoreWithMiddleware(theReducer);

// Log the initial state
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
	console.log("dispatch", store.getState())
});

ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
);
