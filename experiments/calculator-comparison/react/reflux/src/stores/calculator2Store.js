import CalculatorStoreFactory from './CalculatorStoreFactory.js'

const CALCULATOR_ID = "CALCULATOR#";

var store = CalculatorStoreFactory.createCalculatorStore({
	isIdMatch: function (id) {
		return id === CALCULATOR_ID;
	}
});

store.id = CALCULATOR_ID;

export default store