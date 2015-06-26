import React from 'react/addons';
import {root, branch} from 'baobab-react/mixins';
import Baobab from 'baobab';

let tree = new Baobab({
	bar: "1234",
	xyz: "XY&Z"
});

let App = React.createClass({
	mixins: [root],
	render() {
		return (
				<div>
					<Header/>
				</div>
		);
	}
});


var xyzCursor = tree.select('xyz');

let Header = React.createClass({
	mixins: [branch],
	cursors: {
		foo: ['bar'],
		xyz: xyzCursor
	},
	getInitialState: function () {
	  return {};
	},
	render() {
		return (
				<div>
					<div>foo(bar) = {this.state.foo}</div>
					<div>xyz = {this.state.xyz}</div>
				</div>
		);
	}
});

React.render(<App tree={tree}/>, document.body);