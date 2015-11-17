import Baobab from 'baobab';
import operators from './operators.js';

var tree = new Baobab({
	calculator1: {
		operandA: 1,
		operandB: 1,
		operator: operators[0]
	},
	calculator2: {
		operandA: 1,
		operandB: 1,
		operator: operators[0]
	},
	calculator3: {
		operandA: 1,
		operandB: 1,
		operator: operators[0]
	}
});

export default tree;
