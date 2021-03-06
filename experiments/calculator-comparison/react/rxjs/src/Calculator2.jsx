import React from 'react/addons';
import _ from 'lodash';
import Select from './Select.jsx';
import {branch} from 'baobab-react/mixins';
import operators from './operators.js';

var Calculator1 = React.createClass({
	mixins: [branch],
	cursors: {
		calc2: ["calculator2"],
		calc3: ["calculator3"]
	},
	render() {
		var calculator = this.state.calc2;
		return (<div>
			<input type="text" value={calculator.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(operators, 'symbol')} onChange={this.onOperatorChange} />
			<input type="text" value={calculator.operandB} onChange={this.onOperandBChange} />
			<div>{calculator.operator.name} of {calculator.operandA} and {calculator.operandB} is : {this.getResult(this.state.calc2)}</div>
		</div>);
	},
	onOperandAChange(event) {
		this.cursors.calc2.set("operandA", event.target.value);

		// must 'commit' to make change synchronously
		// see https://github.com/Yomguithereal/baobab-react#common-pitfalls
		this.context.tree.commit();

		// note not using this.getResult(this.state.calc2) here because even with commit,
		// the state has not been set(updated) yet, still need to go to the cursor
		this.cursors.calc3.set("operandB", this.getResult(this.cursors.calc2.get()));
	},
	onOperandBChange(event) {
		this.cursors.calc2.set("operandB", event.target.value);
		this.context.tree.commit();
		this.cursors.calc3.set("operandB", this.getResult(this.cursors.calc2.get()));
	},
	onOperatorChange(event) {
		this.cursors.calc2.set("operator", _.findWhere(operators, {symbol: event.target.value}));
		this.context.tree.commit();
		this.cursors.calc3.set("operandB", this.getResult(this.cursors.calc2.get()));
	},
	getResult(calculator) {
		var result = calculator.operator.fn(parseInt(calculator.operandA), parseInt(calculator.operandB));
		return result;
	},

});

//
export default Calculator1;