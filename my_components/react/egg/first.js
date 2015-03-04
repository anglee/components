var App = React.createClass({
  getDefaultProps: function() {
    return {
      txt: "Ang"
    }
  },
  propType: {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
  },
  render: function() {
    return (<div>
      <h1>Hello, { this.props.txt }</h1>
      <h1>Hello, { this.props.cat }</h1>
    </div>)
  }
});
React.render(<App cat={5} />, document.body);
