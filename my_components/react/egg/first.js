var App = React.createClass({
  propType: {
    txt: React.PropTypes.string
  },
  render: function() {
    return (<h1>Hello, { this.props.txt }</h1>)
  }
});
React.renderComponent(<App txt="World" />, document.body);
