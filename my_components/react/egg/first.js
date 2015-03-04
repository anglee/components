var App = React.createClass({
  propType: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render: function() {
    return (<h1>Hello, { this.props.txt }</h1>)
  }
});
React.render(<App txt="World" />, document.body);
