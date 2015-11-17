import React from 'react/addons';
import _ from 'lodash';
import Select from './Select.jsx';

var PureRenderMixin = React.addons.PureRenderMixin;

const operators = [
	{ symbol: "+", name: "Sum", fn: function (a, b) {
		return a + b;
	}},
	{ symbol: "-", name: "Difference", fn: function (a, b) {
		return a - b;
	}},
	{ symbol: "%", name: "Modulo", fn: function (a, b) {
		return a % b;
	}},
	{ symbol: "foo", name: "Foo", fn: function (a, b) {
		return a + b;
	}}
];

var Calculator = React.createClass({
	mixins: [PureRenderMixin],
	propTypes: {
		extOperandA: React.PropTypes.number, // optional
		extOperandB: React.PropTypes.number // optional
	},
	getInitialState() {
		return {
			operandA: 1,
			operandB: 1,
			operator: operators[0]
		}
	},
	render() {
		return (<div>
			<input type="text" value={this.state.operandA} onChange={this.onOperandAChange} />
			<Select options={_.pluck(operators, 'symbol')} onChange={this.onOperatorChange} />
			<input type="text" value={this.state.operandB} onChange={this.onOperandBChange} />
			<div>{this.state.operator.name} of {this.state.operandA} and {this.state.operandB} is : {this.getResult()}</div>
		</div>);
	},
	onOperandAChange(event) {
		this.setState({
			operandA: event.target.value
		});
	},
	onOperandBChange(event) {
		this.setState({
			operandB: event.target.value
		});
	},
	onOperatorChange(event) {
		this.setState({
			operator: _.findWhere(operators, {symbol: event.target.value})
		});
	},
	getResult() {
		var result = this.state.operator.fn(parseInt(this.state.operandA), parseInt(this.state.operandB));
		return result;
	},
	componentWillReceiveProps(nextProps) {
		if (nextProps.extOperandA !== this.props.extOperandA) {
			this.setState({
				operandA: nextProps.extOperandA
			});
		}
		if (nextProps.extOperandB !== this.props.extOperandB) {
			this.setState({
				operandB: nextProps.extOperandB
			});
		}
	},
	componentDidUpdate(prevProps, prevState) {
		if (this.props.onResultUpdated) {
			this.props.onResultUpdated(this.getResult());
		}
	}
});

export default Calculator;