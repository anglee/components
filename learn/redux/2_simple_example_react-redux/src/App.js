import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class App extends Component {
	render() {
		const {ccc, dispatch} = this.props;
		return (<p>
			Clicked: { ccc } times
			{' '}
			<button onClick={() => dispatch(increment(5)) }>+5</button>
			{' '}
			<button onClick={() => this.props.store.dispatch(decrement(3)) }>-3</button>
		</p>);
	}
}

//export default App;

function select(state) {
	return {
		ccc: `(${state.count})`
	};
}

export default connect(select)(App); // rely on store is a prop of App