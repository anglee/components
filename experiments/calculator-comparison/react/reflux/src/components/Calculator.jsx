import _ from 'lodash';
import React from 'react';
import Select from './Select.jsx';
import actions from '../actions/actions.js';
import calculatorStores from '../stores/calculatorStores.js'
import operators from '../constants/operators.js'


var Calculator = React.createClass({
	getInitialState() {
		return {
			operandA: "1",
			operandB: "1",
			operationName: "Sum",
			result: "2"
		}
	},
	componentDidMount() {
		this.unsubscribe = calculatorStores.getStore(this.props.calculatorId).listen(this.onChange);
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	componentWillReceiveProps(nextProps) {
		// whenever the calculator ID changes, the calculator needs to be bound to a different store
		if (nextProps.calculatorId !== this.props.calculatorId) {
			this.unsubscribe();
			this.unsubscribe = calculatorStores.getStore(nextProps.calculatorId).listen(this.onChange);
		}
	},
	render() {
		return (<div>
			<input type="text" value={this.state.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(operators, 'symbol')} onChange={this.onOperatorChange} />
			<input type="text" value={this.state.operandB} onChange={this.onOperandBChange} />
			<div>{this.state.operationName} of {this.state.operandA} and {this.state.operandB} is : {this.state.result}</div>
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
	},
	onChange() {
		var store = calculatorStores.getStore(this.props.calculatorId);
		this.setState({
			operandA: store.getOperandA(),
			operandB: store.getOperandB(),
			operationName: store.getOperationName(),
			result: store.getResult()
		});
	}
});

export default Calculator;