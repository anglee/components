import CalculatorStoreFactory from './CalculatorStoreFactory.js'

const CALCULATOR_ID = "CALCULATOR#1";

var store = CalculatorStoreFactory.createCalculatorStore({
	isIdMatch: function (id) {
	  return id === CALCULATOR_ID;
	}
});

store.id = CALCULATOR_ID;

export default store