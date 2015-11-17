import CalculatorStoreFactory from './CalculatorStoreFactory.js'
import calculator1Store from '../stores/calculator1Store.js';
import calculator2Store from '../stores/calculator2Store.js';

const CALCULATOR_ID = "CALCULATOR#3";

var store = CalculatorStoreFactory.createCalculatorStore({
	isIdMatch: function (id) {
		return id === CALCULATOR_ID;
	},
	init: function () {
		this.listenTo(calculator1Store, this.onCalculator1StoreUpdate);
		this.listenTo(calculator2Store, this.onCalculator2StoreUpdate);
	},
	onCalculator1StoreUpdate() {
		this.setOperandA(calculator1Store.getResult());
		this.trigger();
	},
	onCalculator2StoreUpdate() {
		this.setOperandB(calculator2Store.getResult());
		this.trigger();
	}
});

store.id = CALCULATOR_ID;

export default store