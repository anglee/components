import _ from 'lodash';
import React from 'react';
import Operators from '../constants/Operators.js';
import Select from './Select.jsx';
import Actions from '../actions/Actions.js';
import CalculatorStores from '../stores/CalculatorStores.js';


var Calculator = React.createClass({
	getInitialState() {
		return {
			operandA: "1",
			operandB: "1",
			result: "2"
		}
	},
	componentDidMount() {
		CalculatorStores.getStore(this.props.calculatorId).addChangeListener(this.onChange);
	},
	componentWillUnmount() {
		CalculatorStores.getStore(this.props.calculatorId).removeChangeListener(this.onChange);
	},
	componentWillReceiveProps(nextProps) {
		// whenever the calculator ID changes, the calculator needs to be bound to a different store
		if (nextProps.calculatorId !== this.props.calculatorId) {
			CalculatorStores.getStore(this.props.calculatorId).removeChangeListener(this.onChange);
			CalculatorStores.getStore(nextProps.calculatorId).addChangeListener(this.onChange);
		}
	},
	render() {
		return (<div>
			<input type="text" value={this.state.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(Operators, 'symbol')} onChange={this.onOperatorChange} />
			<input type="text" value={this.state.operandB} onChange={this.onOperandBChange} />
			<div>{this.state.operationName} of {this.state.operandA} and {this.state.operandB} is : {this.state.result}</div>
		</div>);
	},
	onOperandAChange(event) {
		Actions.operandAChanged(this.props.calculatorId, event.target.value);
	},
	onOperandBChange(event) {
		Actions.operandBChanged(this.props.calculatorId, event.target.value);
	},
	onOperatorChange(event) {
		Actions.operatorChanged(this.props.calculatorId, event.target.value);
	},
	onChange() {
		this.setState({
			operandA: CalculatorStores.getStore(this.props.calculatorId).getOperandA(),
			operandB: CalculatorStores.getStore(this.props.calculatorId).getOperandB(),
			operationName: CalculatorStores.getStore(this.props.calculatorId).getOperationName(),
			result: CalculatorStores.getStore(this.props.calculatorId).getResult()
		});
	}
});

export default Calculator;