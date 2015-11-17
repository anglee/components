import React from 'react';
import Calculator from './Calculator.jsx';
import anx from 'anx-react';

var Button = anx.depot.Button;

var CalcApp = React.createClass({
	getInitialState() {
		return {
			calculator1Result: 1,
			calculator2Result: 1
		}
	},
	render() {
		return (
				<div>
					<Button text="BLAH" />
			<Calculator onResultUpdated={this.setCalculator1Result} />
			<Calculator onResultUpdated={this.setCalculator2Result} />
			<Calculator
					extOperandA={this.state.calculator1Result}
					extOperandB={this.state.calculator2Result} />
		</div>);
	},
	setCalculator1Result(result) {
		this.setState({
			calculator1Result: result
		});
	},
	setCalculator2Result(result) {
		this.setState({
			calculator2Result: result
		});
	}
});

React.render(<CalcApp />, document.body);