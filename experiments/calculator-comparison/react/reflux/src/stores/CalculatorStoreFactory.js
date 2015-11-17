import _ from 'lodash';
import Reflux from 'reflux';
import actions from '../actions/actions.js';
import operators from '../constants/operators.js';

var CalculatorStoreFactory = {
	createCalculatorStore(mixin) {
		var _operandA = "1";
		var _operandB = "1";
		var _operator = operators[0];

		var store = Reflux.createStore(_.assign({
			listenables: [actions],
			onOperandAChange(calculatorId, value) {
				if (this.isIdMatch(calculatorId)) {
					_operandA = value;
					this.trigger();
				}
			},
			onOperandBChange(calculatorId, value) {
				if (this.isIdMatch(calculatorId)) {
					_operandB = value;
					this.trigger();
				}
			},
			onOperatorChange(calculatorId, value) {
				if (this.isIdMatch(calculatorId)) {
					_operator = _.findWhere(operators, {symbol: value});
					this.trigger();
				}
			},
			setOperandA(value) {
				_operandA = value;
			},
			setOperandB(value) {
				_operandB = value;
			},
			getOperandA() {
				return _operandA;
			},
			getOperandB() {
				return _operandB;
			},
			getOperationName() {
				return _operator.name;
			},
			getResult() {
				return _operator.fn(parseInt(_operandA), parseInt(_operandB));
			}
		}, mixin));

		return store;
	}
};

export default CalculatorStoreFactory;
