var React = require("react");

var App = React.createClass({
  getInitialState: function() {
    let items = [1,2].map((it) => { return {
      text: `I am checking in #${it}`
    }});
    return {
      items: items
    };
  },
  render() {
    return (<div>
      <h1>Hello change </h1>
      { this.state.items.map(it => <div>{it.text}</div>) }
    </div>);
  }
});

React.render(<App/>, document.getElementById('example'));