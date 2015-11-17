import _ from 'lodash';
import React from 'react';
import Calculator from './components/Calculator.jsx';
import AppStore from './stores/calculatorAppStore.js';

var CalcApp = React.createClass({
	componentDidMount() {
		this.unsubscribe = AppStore.listen(this.onChange);
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		var calculators = AppStore.getAppState().map((calculator) => {
			return (<Calculator key={calculator.id}
					calculatorId={calculator.id}
					operandA={calculator.operandA}
					operandB={calculator.operandB}
					operator={calculator.operator}
					result={calculator.result} />);
		});

		return (<div>{calculators}</div>);
	},
	onChange() {
		this.setState(AppStore.getAppState());
	}
});

React.render(<CalcApp />, document.body);