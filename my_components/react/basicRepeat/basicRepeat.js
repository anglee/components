var App = React.createClass({
  getInitialState: function() {
    return {
      items: [{
        text: "I am #1"
      }, {
        text: "I am #2"
      }]
    };
  },
  render: function() {
    var items = this.state.items.map(function(item, i){
      return (
          <div>{item.text}</div>
      );
    });
    return (<div>
      {items}
    </div>)
  }
});

React.render(<App />, document.getElementById('container'));