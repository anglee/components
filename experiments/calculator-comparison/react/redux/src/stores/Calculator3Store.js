import _ from "lodash";
import Operators from '../constants/Operators.js';
import ActionTypes from '../constants/ActionTypes.js';
import TheDispatcher from '../dispatcher/TheDispatcher.js';
import StoreFactory from './CalculatorStoreFactory.js';
import Calculator1Store from "./Calculator1Store.js";
import Calculator2Store from "./Calculator2Store.js";

const CALCULATOR_ID = "CALCULATOR#3";
var {store, setters} = StoreFactory.createCalculatorStore();

TheDispatcher.register(function (action) {
	if (action.calculatorId === CALCULATOR_ID) {
		switch (action.actionType) {
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
	} else if (action.calculatorId === Calculator1Store.id) {
		TheDispatcher.waitFor([Calculator1Store.dispatchToken]);
		setters.setOperandA(Calculator1Store.getResult());
		store.emitChange();
	} else if (action.calculatorId === Calculator2Store.id) {
		TheDispatcher.waitFor([Calculator2Store.dispatchToken]);
		setters.setOperandB(Calculator2Store.getResult());
		store.emitChange();
	}
});

store.id = CALCULATOR_ID;

export default store;
