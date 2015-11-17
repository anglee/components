import _ from 'lodash';
import Calculator1Store from '../stores/Calculator1Store.js';
import Calculator2Store from '../stores/Calculator2Store.js';
import Calculator3Store from '../stores/Calculator3Store.js';

export default {
	getStore(calculatorId) {
		return _.findWhere([
			Calculator1Store,
			Calculator2Store,
			Calculator3Store
		], {id: calculatorId});
	}
}