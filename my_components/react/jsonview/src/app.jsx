var React = require("react/addons");
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

//var TextNode = React.createClass({
//  getInitialState() {
//    return {
//      txt: "initial text"
//    }
//  },
//  update() {
//    this.setState({
//      txt: this.refs.theText.getDOMNode().value
//    })
//  },
//  render() {
//    return (<span>
//      <input type="text"
//             ref="theText"
//             onChange={this.update} />
//      "{this.props.model}"
//      "{this.state.txt}"
//    </span>);
//  }
//});

var TextNode = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState() {
    return {
      txt: "initial text"
    }
  },
  render() {
    return (<span>
      <input type="text"
             valueLink={this.linkState('txt')} />
      "{this.props.model}"
      "{this.state.txt}"
    </span>);
  }
});
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
          return (<Node key={k} model={v}></Node>);
        });
        var result = [];
        for (let i = 0; i < entries.length; ++i) {
          if (i !== 0) {
            result.push(<span key={i + 100}>, </span>);
          }
          result.push(entries[i])
        }
        content = result;
      } else {
        let model = this.props.model;
        var entries = _.map(model, function(v, i) {
          return (<div key={i}>
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

var TheMixin = {
  mixmix: function(foo) {
    console.log("Mix Mix Mix " + foo);
  }
};

var Node = React.createClass({
  mixins: [TheMixin],
  propTypes:{
    level: React.PropTypes.number//.isRequired
  },
  render() {
    if (_.isArray(this.props.model)) {
      this.mixmix("rendering an Array!");
      return (<ArrayNode model={this.props.model}
                         level={this.props.level + 1}></ArrayNode>);
    } else if (_.isString(this.props.model)) {
      return (<TextNode model={this.props.model}></TextNode>);
    } else if (_.isObject(this.props.model)) {
      return (<ObjectNode model={this.props.model}
                          level={this.props.level + 1}></ObjectNode>);
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
    var spaces = _.range(this.props.count).map(function(i) {
      return (<span key={i}>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
    });

    return (<span>
      {spaces}
      </span>);
  }
});
var ObjectNode = React.createClass({
  getInitialState() {
    console.log("ObjectNode - getInitialState");
    return null;
  },
  componentWillMount() {
    console.log("ObjectNode - componentWillMount");
  },
  componentDidMount() {
    console.log("ObjectNode - componentDidMount");
  },
  componentWillReceiveProps() {
    console.log("ObjectNode - componentWillReceiveProps");
  },
  shouldComponentUpdate() {
    console.log("ObjectNode - shouldComponentUpdate");
    return true;
  },
  componentWillUpdate() {
    console.log("ObjectNode - componentWillUpdate");
  },
  componentDidUpdate() {
    console.log("ObjectNode - componentDidUpdate");
  },
  componentWillUnmount() {
    console.log("JSONView - componentWillUnmount");
  },
  propTypes: {
    //model: React.PropTypes.object
    model: function(props, propName, componentName) {
      console.group();
      console.log("props", props);
      console.log("propName", propName);
      console.log("componentName", componentName);
      console.groupEnd();

      if (!(propName in props)) {
        throw new Error("hey where's the prop: " + propName);
      }
    }
  },
  contextTypes: {
    ccc: React.PropTypes.string
  },
  render() {
    console.log("ObjectNode - render");
    let model = this.props.model;
    let lastKey = _.last(_.keys(model));
    var entries = _.map(model, function(v, k) {
      return (<div key={k}>
        <Indent count={2}/>"{k}": <Node model={v}></Node>{k !== lastKey ? "," : ""}
      </div>);
    });

    return (<span>
      <span>{'{'}</span>
      { entries }
      <span><Indent/>{'}'}</span>
      <span><b>{ this.context.ccc }</b></span>
    </span>);
  }
});



var JSONView = React.createClass({
  getInitialState() {
    console.log("JSONView - getInitialState");
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
  componentWillMount() {
    console.log("JSONView - componentWillMount");
  },
  componentDidMount() {
    console.log("JSONView - componentDidMount");
  },
  componentWillReceiveProps() {
    console.log("JSONView - componentWillReceiveProps");
  },
  shouldComponentUpdate() {
    console.log("JSONView - shouldComponentUpdate");
    return true;
  },
  componentWillUpdate() {
    console.log("JSONView - componentWillUpdate");
  },
  componentDidUpdate() {
    console.log("JSONView - componentDidUpdate");
  },
  componentWillUnmount() {
    console.log("JSONView - componentWillUnmount");
  },
  render() {
    //var model = JSON.parse(this.props.modelString);
    var model = this.state;
    let lastKey = _.last(_.keys(model));
    var level = 0;
    var entries = _.map(model, function(v, k) {
      return (<div key={k}>
        <Indent/>"{k}": <Node model={v} level={level}></Node>{k !== lastKey ? "," : ""}
      </div>);
    });
    return (<div>
      <div>{'{'}</div>
      { entries }
      <div>{'}'}</div>
    </div>);
  },
  childContextTypes: {
    ccc: React.PropTypes.string
  },
  getChildContext: function() {
    return {
      ccc: "cool child context"
    };
  }
});

//React.render(<JSONView modelString={'{"ABC": 100, "PQR": "hello", "XYZ_Obj": {"foo": 999, "aaa_Array": ["A", 123, "C"], "bbb_Array": ["A", 123, "C", "D"]} }'}/>, document.getElementById('example'));
React.render(<JSONView />, document.getElementById('example'));