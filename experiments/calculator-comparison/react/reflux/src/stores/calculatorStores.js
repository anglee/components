import _ from 'lodash';
import calculator1Store from '../stores/calculator1Store.js';
import calculator2Store from '../stores/calculator2Store.js';
import calculator3Store from '../stores/calculator3Store.js';

export default {
	getStore(calculatorId) {
		return _.findWhere([
			calculator1Store,
			calculator2Store,
			calculator3Store
		], {id: calculatorId});
	}
}