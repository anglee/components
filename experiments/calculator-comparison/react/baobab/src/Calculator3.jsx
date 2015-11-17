import React from 'react/addons';
import _ from 'lodash';
import Select from './Select.jsx';
import {branch} from 'baobab-react/mixins';
import operators from './operators.js';

var Calculator3 = React.createClass({
	mixins: [branch],
	cursors: {
		calc: ["calculator3"]
	},
	render() {
		var calculator = this.state.calc;
		return (<div>
			<input type="text" value={calculator.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(operators, 'symbol')} onChange={this.onOperatorChange} />
			<input type="text" value={calculator.operandB} onChange={this.onOperandBChange} />
			<div>{calculator.operator.name} of {calculator.operandA} and {calculator.operandB} is : {this.getResult()}</div>
		</div>);
	},
	onOperandAChange(event) {
		this.cursors.calc.set("operandA", event.target.value);
	},
	onOperandBChange(event) {
		this.cursors.calc.set("operandB", event.target.value);
	},
	onOperatorChange(event) {
		this.cursors.calc.set("operator", _.findWhere(operators, {symbol: event.target.value}));
	},
	getResult() {
		var calculator = this.state.calc;
		var result = calculator.operator.fn(parseInt(calculator.operandA), parseInt(calculator.operandB));
		return result;
	}
});

//
export default Calculator3;