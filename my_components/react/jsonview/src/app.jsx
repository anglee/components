var React = require("react");
var _ = require("lodash");

//var JVHide = React.createClass({
//
//});
//
//var CommaSep = React.createClass({
//  render() {
//    var content = [];
//
//    return (<span>{content}</span>);
//  }
//});

var ArrayNode = React.createClass({
  getInitialState: function() {
    return {
      expanded: true
    };
  },
  _toggleExpanded: function() {
    console.log("toggle Ex");
    this.state.expanded = !this.state.expanded;
    this.setState(this.state);
  },
  render() {
    console.log(this.props.model);

    var content;

    if (this.state.expanded) {
      if (this.props.model.length <= 3) {
        let entries = _.map(this.props.model, function(v, k) {
          return (<Node model={v}></Node>);
        });
        var result = [];
        for (let i = 0; i < entries.length; ++i) {
          if (i !== 0) {
            result.push(<span>, </span>);
          }
          result.push(entries[i])
        }
        content = result;
      } else {
        let model = this.props.model;
        var entries = _.map(model, function(v, i) {
          return (<div>
            <Indent count={3}/><Node model={v}></Node>{i !== model.length - 1 ? "," : ""}
          </div>);
        });

        content = (<span>{ entries }<Indent count={2} /></span>);
      }

    } else {
      content = (<span>...</span>);
    }
    return (<span><button onClick={this._toggleExpanded}>{this.state.expanded ? "-" : "+"}</button>[{content}]</span>);
  }
});

var Node = React.createClass({
  render() {

    if (_.isArray(this.props.model)) {
      return (<ArrayNode model={this.props.model}
                         level={this.props.level + 1}></ArrayNode>);
    } else if (_.isObject(this.props.model)) {
      return (<ObjectNode model={this.props.model}
                          level={this.props.level + 1}></ObjectNode>);
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
var ObjectNode = React.createClass({
  render() {
    let model = this.props.model;
    let lastKey = _.last(_.keys(model));
    var entries = _.map(model, function(v, k) {
      return (<div>
        <Indent count={2}/>"{k}": <Node model={v}></Node>{k !== lastKey ? "," : ""}
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
  getInitialState() {
    var self = this;
    var state = {
      "ABC": 100,
      "PQR": "hello",
      "XYZ_Obj": {
        "foo": 999,
        "aaa_Array": ["A", 123, "C"],
        "bbb_Array": ["A", 123, "C", "D"]
      }
    };
    setTimeout(function() {
      state.ABC=500;
      state.ABC_Obj={
        "Ang": "Lee"
      };
      self.setState(state);
    }, 1000);

    return state;
  },
  render() {
    //var model = JSON.parse(this.props.modelString);
    var model = this.state;
    let lastKey = _.last(_.keys(model));
    var level = 0;
    var entries = _.map(model, function(v, k) {
      return (<div>
        <Indent/>"{k}": <Node model={v} level={level}></Node>{k !== lastKey ? "," : ""}
      </div>);
    });
    return (<div>
      <div>{'{'}</div>
      { entries }
      <div>{'}'}</div>
    </div>);
  }
});

//React.render(<JSONView modelString={'{"ABC": 100, "PQR": "hello", "XYZ_Obj": {"foo": 999, "aaa_Array": ["A", 123, "C"], "bbb_Array": ["A", 123, "C", "D"]} }'}/>, document.getElementById('example'));
React.render(<JSONView />, document.getElementById('example'));