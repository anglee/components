var Box = React.createClass({
  componentDidMount: function() {
    var node = this.getDOMNode();
    TweenMax.to(node, .5, {x: 300});
  },
  render: function() {
    return (
        <div className={"box"}></div>
    );
  }
});

React.render(<Box name="world" />, document.getElementById('container'));