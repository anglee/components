import TheDispatcher from '../dispatcher/TheDispatcher.js';
import ActionTypes from '../constants/ActionTypes.js';

var Actions = {
	operandAChanged(calculatorId, value) {
		TheDispatcher.dispatch({
			actionType: ActionTypes.OPERAND_A_CHANGED,
			value: value,
			calculatorId: calculatorId
		});
	},
	operandBChanged(calculatorId, value) {
		TheDispatcher.dispatch({
			actionType: ActionTypes.OPERAND_B_CHANGED,
			value: value,
			calculatorId: calculatorId
		});
	},
	operatorChanged(calculatorId, value) {
		TheDispatcher.dispatch({
			actionType: ActionTypes.OPERATOR_CHANGED,
			value: value,
			calculatorId: calculatorId
		});
	}
};

export default Actions;