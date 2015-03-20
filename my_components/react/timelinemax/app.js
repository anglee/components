var Box = React.createClass({
  //componentDidMount: function() {
  //  var node = this.getDOMNode();
  //  TweenMax.to(node, .5, {x: 300});
  //},
  render: function() {
    return (
        <div className={"Box"}></div>
    );
  }
});

var App = React.createClass({
  componentDidMount: function() {
    var top = this.refs.top.getDOMNode();
    var bottom = this.refs.bottom.getDOMNode();
    var left = this.refs.left.getDOMNode();
    var right = this.refs.right.getDOMNode();

    var t = new TimelineMax({repeat:-1, yoyo:true});
    t.to(top, .5, {y: -100});
    t.to(right, .5, {x: 100});
    t.to(bottom, .5, {y: 100});
    t.to(left, .5, {x: -100});

  },
  render: function() {
    return (
        <div className={"container"}>
            <Box ref="top"></Box>
            <Box ref="bottom"></Box>
            <Box ref="left"></Box>
            <Box ref="right"></Box>
        </div>
    );
  }
});

React.render(<App />, document.getElementById('container'));