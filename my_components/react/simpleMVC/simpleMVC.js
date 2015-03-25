var theModel = (function() {
  var _model = {};
  var _changeListeners = [];
  return {
    addChangeListener: function(listener) {
      _changeListeners.push(listener);
    },
    get: function() {
      return _model;
    },
    set: function(model) {
      _model = model;
      _changeListeners.forEach(function(listener) {
        listener();
      });
    }
  };
})();

var theController = (function() {
  var _model;
  return {
    init: function(model) {
      _model = model;
    },
    performAction: function() {
      var old = _model.get();
      old.items.push({
        text: "I am #" + (old.items.length + 1)
      });
      _model.set(old);
    }
  };
})();

var App = React.createClass({
  getInitialState: function() {
    var initialState = {
      items: [{
        text: "I am #1"
      }, {
        text: "I am #2"
      }]
    };
    theModel.set(initialState);
    theController.init(theModel);
    return initialState;
  },
  componentWillMount: function() {
    theModel.addChangeListener(this._onChange);
  },
  _onClick: function() {
    theController.performAction();
  },
  _onChange: function() {
    this.setState(theModel.get());
  },
  render: function() {
    var items = this.state.items.map(function(item, i){
      return (
          <div>{item.text}</div>
      );
    });
    return (<div>
        <div> {items} </div>
        <button onClick={this._onClick}>Hit me</button>
      </div>)
  }
});

React.render(<App />, document.getElementById('container'));