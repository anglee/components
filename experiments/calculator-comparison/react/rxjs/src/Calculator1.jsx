import React from 'react/addons';
import _ from 'lodash';
import Select from './Select.jsx';



var Calculator = React.createClass({
	getInitialState() {
		return {
			operandA: 1,
			operandB: 1
		}
	},
	render() {
		return (<div>
			<input type="text" value={this.state.operandA} onChange={this.onOperandAChange} />
			<input type="text" value={this.state.operandB} onChange={this.onOperandBChange} />
		</div>);
	},
	onOperandAChange(event) {
	},
	onOperandBChange(event) {
	}
});

export default Calculator;