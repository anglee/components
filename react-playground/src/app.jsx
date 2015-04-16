var React = require("react");
var Reflux = require("reflux");

var store = Reflux.createStore({
    data: {
        items: [],
        tick: 1
    },
    init() {
        setInterval(() => {
            this.data.tick++;
            this.trigger(this.data);
        }, 500);
    },
    getInitialState: function() {
        this.data.items = [1,2].map((it) => { return {
            text: `I am checking in #${it}`
        }});
        return this.data;
    }
});

var App = React.createClass({
    mixins: [Reflux.connect(store)],
    statics: {
      add(a, b) {
        return a + b;
      }
    },
    render() {
        let foo = App.add(1, 1);
        let bar = this.constructor.add(1, 1);
        return (<div>
            <h1>Hello change </h1>
            { this.state.items.map(it => <div>{it.text}</div>) }
            <div>{ this.state.tick }</div>
            <span>1 + 1 = { foo } (or { bar })</span>
        </div>);
    }
});

console.log(App.add(2, 3));
React.render(<App/>, document.getElementById('example'));