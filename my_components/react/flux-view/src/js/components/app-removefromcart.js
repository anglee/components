/** @jsx React.DOM */
var React = require("react");
var AppActions = require("../actions/app-actions");
var AddToCart = React.createClass({
  handleClick: function() {
    AppActions.removeItem(this.props.index);
  },
  render: function() {
    return (
        <button onClick={this.handleClick}>
          x
        </button>
    );
  }
});

module.exports = AddToCart;