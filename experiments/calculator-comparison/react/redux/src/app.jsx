import React from 'react';
import Calculator from './components/Calculator.jsx';
import Calculator1Store from "./stores/Calculator1Store.js";
import Calculator2Store from "./stores/Calculator2Store.js";
import Calculator3Store from "./stores/Calculator3Store.js";

var CalcApp = React.createClass({
	render() {
		return (<div>
			<Calculator calculatorId={Calculator1Store.id} />
			<Calculator calculatorId={Calculator2Store.id} />
			<Calculator calculatorId={Calculator3Store.id} />
		</div>);
	}
});

React.render(<CalcApp />, document.body);