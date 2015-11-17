import React from 'react';

var Select = React.createClass({
	propTypes: {
		options: React.PropTypes.array.isRequired
	},
	render() {
		return (<select value={this.props.value} onChange={this.props.onChange}>
			{this.props.options.map((opt, i) => <option key={opt}>{opt}</option>)}
		</select>)
	}
});

export default Select;