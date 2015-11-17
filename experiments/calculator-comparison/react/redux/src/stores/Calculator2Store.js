import _ from "lodash";
import Operators from '../constants/Operators.js';
import ActionTypes from '../constants/ActionTypes.js';
import TheDispatcher from '../dispatcher/TheDispatcher.js';
import StoreFactory from './CalculatorStoreFactory.js';

const CALCULATOR_ID = "CALCULATOR#2";
var {store, setters} = StoreFactory.createCalculatorStore();

store.dispatchToken = TheDispatcher.register(function(action) {
	if (action.calculatorId !== CALCULATOR_ID) {
		return;
	}
	switch(action.actionType) {
		case ActionTypes.OPERAND_A_CHANGED:
			setters.setOperandA(action.value);
			store.emitChange();
			break;
		case ActionTypes.OPERAND_B_CHANGED:
			setters.setOperandB(action.value);
			store.emitChange();
			break;
		case ActionTypes.OPERATOR_CHANGED:
			setters.setOperator(_.findWhere(Operators, {symbol: action.value}));
			store.emitChange();
			break;
	}
});

store.id = CALCULATOR_ID;

export default store;
