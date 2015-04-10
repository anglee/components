var Item = React.createClass({
  _delete: function(it) {
    alert(this.props.text);
  },
  render: function() {
    return (<div>
        <span>{this.props.text}</span>
        <button onClick={this._delete}>delete</button>
      </div>);
  }
});

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
          <Item text={item.text}></Item>
      );
    });
    return (<div>
      <button onClick={this._onclick}>Add</button>
      {items}
    </div>);
  }
});

React.render(<App />, document.getElementById('container'));