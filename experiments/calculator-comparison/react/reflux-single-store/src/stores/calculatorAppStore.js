import _ from 'lodash';
import Reflux from "reflux";
import actions from '../actions/actions.js';
import operators from "../constants/operators.js";

var calculatorIds = ["CALCULATOR#1", "CALCULATOR#2", "CALCULATOR#3"];
var calculatorModels = calculatorIds.reduce(function(ret, id) {
	ret[id] = {
		operandA: "1",
		operandB: "1",
		operator: operators[0],
		getResult: function () {
			return this.operator.fn(parseInt(this.operandA), parseInt(this.operandB));
		}
	};
	return ret;
}, {});

var updateCalculator3 = function (sourceOfChange) {
	if (sourceOfChange === "CALCULATOR#1") {
		calculatorModels["CALCULATOR#3"].operandA = calculatorModels["CALCULATOR#1"].getResult();
	} else if (sourceOfChange === "CALCULATOR#2") {
		calculatorModels["CALCULATOR#3"].operandB = calculatorModels["CALCULATOR#2"].getResult();
	}
};

var store = Reflux.createStore({
	listenables: [actions],
	onOperandAChange(calculatorId, value) {
		calculatorModels[calculatorId].operandA = value;
		updateCalculator3(calculatorId);
		this.trigger();
	},
	onOperandBChange(calculatorId, value) {
		calculatorModels[calculatorId].operandB = value;
		updateCalculator3(calculatorId);
		this.trigger();
	},
	onOperatorChange(calculatorId, value) {
		calculatorModels[calculatorId].operator = _.findWhere(operators, {symbol: value});
		updateCalculator3(calculatorId);
		this.trigger();
	},
	getAppState() {
		return calculatorIds.map(id => {
			var model = calculatorModels[id];
			return {
				id: id,
				operandA: model.operandA,
				operandB: model.operandB,
				operator: model.operator,
				result: model.getResult()
			};
		});
	}
});

export default store;