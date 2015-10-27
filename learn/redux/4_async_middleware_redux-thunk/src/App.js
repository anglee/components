import React, { Component, PropTypes } from 'react';
import { increment, decrement, asyncIncrement } from './actions';
import _ from 'lodash';


var App = React.createClass({
	getInitialState() {
		return _.pick(this.props.store.getState(), "count", "status");
	},
	componentDidMount() {
		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState(_.pick(this.props.store.getState(), "count", "status"));
		});
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		return (<p>
			Clicked: { this.state.count } times
			{' '}
			<button onClick={() => this.props.store.dispatch(increment(5)) }>+5</button>
			{' '}
			<button onClick={() => this.props.store.dispatch(decrement(3)) }>-3</button>
			{' '}
			<button onClick={() => this.props.store.dispatch(asyncIncrement(1)) }>+1 async</button>
			{ this.state.status }
		</p>);
	}
})

export default App;
