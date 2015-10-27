import React, { Component, PropTypes } from 'react';
import { increment, decrement } from './actions';

var App = React.createClass({
	getInitialState() {
		return {
			count: this.props.store.getState().count
		};
	},
	componentDidMount() {
		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				count: this.props.store.getState().count
			});
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
		</p>);
	}
})

export default App;
