var App = React.createClass({
  getInitialState: function() {
    return {
      items: [{
        text: "I am checking in #1"
      }, {
        text: "I am checking in #2"
      }]
    };
  },
  _onclick: function() {
    this.state.items.push({
      text: "I am checking in #" + (this.state.items.length + 1)
    });
    this.setState(this.state);
  },
  render: function() {
    var items = this.state.items.map(function(item, i){
      return (
          <div>{item.text}</div>
      );
    });
    return (<div>
      <button onClick={this._onclick}>Add</button>
      {items}
    </div>);
  }
});

React.render(<App />, document.getElementById('container'));