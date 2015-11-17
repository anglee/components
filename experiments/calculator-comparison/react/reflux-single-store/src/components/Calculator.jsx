import _ from 'lodash';
import React from 'react';
import Select from './Select.jsx';
import actions from '../actions/actions.js';
import operators from '../constants/operators.js'

var Calculator = React.createClass({
	render() {
		return (<div>
			<input type="text" value={this.props.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(operators, 'symbol')} onChange={this.onOperatorChange} value={this.props.operator.symbol} />
			<input type="text" value={this.props.operandB} onChange={this.onOperandBChange} />
			<div>{this.props.operator.name} of {this.props.operandA} and {this.props.operandB} is : {this.props.result}</div>
		</div>);
	},
	onOperandAChange(event) {
		actions.operandAChange(this.props.calculatorId, event.target.value);
	},
	onOperandBChange(event) {
		actions.operandBChange(this.props.calculatorId, event.target.value);
	},
	onOperatorChange(event) {
		actions.operatorChange(this.props.calculatorId, event.target.value);
	}
});

export default Calculator;