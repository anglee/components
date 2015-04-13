var React = require("react");
var _ = require("lodash");


var ObjNode = React.createClass({
  render() {

    if (_.isObject(this.props.model)) {
      return (<ObjNode2 model={this.props.model}
                        level={this.props.level + 1}></ObjNode2>);

    } else if (_.isString(this.props.model)) {
      return (<span>"{this.props.model}"</span>);
    } else {
      return (<span>{this.props.model}</span>);
    }
  }
});

var Indent = React.createClass({
  render() {
    if (this.props.count == null) {
      this.props.count = 1;
    }
    var spaces = _.range(this.props.count).map(function() {
      return (<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
    });

    return (<span>
      {spaces}
      </span>);
  }
});
var ObjNode2 = React.createClass({
  render() {
    var entries = _.map(this.props.model, function(v, k) {
      return (<div>
        <Indent count={2}/>"{k}": <ObjNode model={v}></ObjNode>
      </div>);
    });

    return (<span>
      <span>{'{'}</span>
      { entries }
      <span><Indent/>{'}'}</span>
    </span>);
  }
});

var JSONView = React.createClass({
  render() {
    var model = JSON.parse(this.props.modelString);
    var level = 0;
    var entries = _.map(model, function(v, k) {
      return (<div>
        <Indent/>"{k}": <ObjNode model={v} level={level}></ObjNode>
      </div>);
    });

    return (<div>
      <div>{'{'}</div>
      { entries }
      <div>{'}'}</div>
    </div>);
  }
});

React.render(<JSONView modelString={'{"ABC": 100, "PQR": "hello", "XYZ": {"foo": 999} }'}/>, document.getElementById('example'));
//React.render(<ObjNode model={'{"ABC": 100 }'}/>, document.getElementById('example'));