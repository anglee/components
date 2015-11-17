import React from 'react';
import {root, branch} from 'baobab-react/mixins';
import Calculator1 from './Calculator1.jsx';
import Calculator2 from './Calculator2.jsx';
import Calculator3 from './Calculator3.jsx';
import stateTree from './stateTree.js';

var CalcAppContainer = React.createClass({
	mixins: [root],
	render() {
		return (<CalcApp />);
	}
});

var CalcApp = React.createClass({
	render() {
		return (<div>
			<Calculator1 />
			<Calculator2 />
			<Calculator3 />
		</div>);
	}
});

React.render(<CalcAppContainer tree={stateTree} />, document.body);