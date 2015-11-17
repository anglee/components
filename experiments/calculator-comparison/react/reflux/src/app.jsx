import React from 'react';
import Calculator from './components/Calculator.jsx';
import calculator1Store from './stores/calculator1Store.js';
import calculator2Store from './stores/calculator2Store.js';
import calculator3Store from './stores/calculator3Store.js';

var CalcApp = React.createClass({
	render() {
		return (<div>
			<Calculator calculatorId={calculator1Store.id} />
			<Calculator calculatorId={calculator2Store.id} />
			<Calculator calculatorId={calculator3Store.id} />
		</div>);
	}
});

React.render(<CalcApp />, document.body);