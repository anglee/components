import Operators from '../constants/Operators.js';
import _ from 'lodash';
import EventEmitter from 'events';

var CHANGE_EVENT = "change";

var Observable = _.assign({}, EventEmitter.prototype, {
	emitChange() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

var CalculatorFactory = {
	createCalculatorStore() {
		var _operandA = '1';
		var _operandB = '1';
		var _operator = Operators[0];

		var CalculatorStore = _.assign({
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
		}, Observable);

		return {
			store: CalculatorStore,
			setters: {
				setOperandA: function (value) {
				  _operandA = value;
				},
				setOperandB: function (value) {
					_operandB = value;
				},
				setOperator: function (value) {
					_operator = value;
				}
			}
		}
	}
};

export default CalculatorFactory;
