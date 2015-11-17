import React from 'react';
import Calculator1 from './Calculator1.jsx';
import foo from './foo.js';

var CalcApp = React.createClass({
	render() {
		return (<div>
			<Calculator1 />
		</div>);
	}
});

React.render(<CalcApp />, document.body);